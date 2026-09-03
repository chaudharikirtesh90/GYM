import crypto from 'crypto';
import User from '../models/User.js';
import { generateToken, generateRefreshToken } from '../utils/generateToken.js';
import { sendMail } from '../config/mail.js';

const setAuthCookies = (res, accessToken, refreshTokenValue) => {
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.cookie('refreshToken', refreshTokenValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const verificationToken = crypto.randomBytes(32).toString('hex');
    const user = await User.create({
      fullName,
      email,
      password,
      role: role || 'member',
      verificationToken,
    });

    const verifyLink = `${process.env.CLIENT_URL || 'http://localhost:5173'}/verify-email/${verificationToken}`;
    await sendMail({
      to: user.email,
      subject: 'Verify your EliteFit account',
      html: `<p>Hello ${user.fullName},</p><p>Click <a href="${verifyLink}">here</a> to verify your email.</p>`,
    });

    const token = generateToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    user.refreshToken = refreshToken;
    await user.save();
    setAuthCookies(res, token, refreshToken);

    res.status(201).json({
      message: 'User registered successfully. Please verify your email.',
      user: { id: user._id, fullName: user.fullName, email: user.email, role: user.role },
      token,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Registration failed.' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your email before logging in.' });
    }

    const token = generateToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    user.refreshToken = refreshToken;
    user.lastLogin = new Date();
    await user.save();

    setAuthCookies(res, token, refreshToken);

    res.status(200).json({
      message: 'Login successful',
      user: { id: user._id, fullName: user.fullName, email: user.email, role: user.role },
      token,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Login failed.' });
  }
};

export const logoutUser = async (req, res) => {
  try {
    const user = req.user;
    if (user) {
      user.refreshToken = '';
      await user.save();
    }
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.status(200).json({ message: 'Logged out successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Logout failed.' });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000;
    await user.save();

    const resetLink = `${process.env.CLIENT_URL || 'http://localhost:5173'}/reset-password/${resetToken}`;
    await sendMail({
      to: user.email,
      subject: 'Reset your password',
      html: `<p>Hello ${user.fullName},</p><p>Use <a href="${resetLink}">this link</a> to reset your password.</p>`,
    });

    res.status(200).json({ message: 'Password reset instructions have been sent.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to send reset email.' });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    if (!token || !password) {
      return res.status(400).json({ message: 'Token and password are required.' });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token.' });
    }

    user.password = password;
    user.resetPasswordToken = '';
    user.resetPasswordExpires = null;
    await user.save();

    res.status(200).json({ message: 'Password reset successful.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Could not reset password.' });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({ message: 'Invalid verification token.' });
    }

    user.isVerified = true;
    user.verificationToken = '';
    await user.save();

    res.status(200).json({ message: 'Email verified successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Verification failed.' });
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { email, fullName, avatar } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Google email is required.' });
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        fullName: fullName || 'Google User',
        email,
        password: 'google-auth',
        role: 'member',
        profileImage: avatar || '',
        isVerified: true,
      });
    }

    const token = generateToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    user.refreshToken = refreshToken;
    await user.save();

    setAuthCookies(res, token, refreshToken);
    res.status(200).json({
      message: 'Google login successful',
      user: { id: user._id, fullName: user.fullName, email: user.email, role: user.role },
      token,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Google login failed.' });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { refreshToken: token } = req.body;
    if (!token) {
      return res.status(401).json({ message: 'Refresh token is required.' });
    }

    const user = await User.findOne({ refreshToken: token });
    if (!user) {
      return res.status(401).json({ message: 'Invalid refresh token.' });
    }

    const accessToken = generateToken(user._id);
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Token refresh failed.' });
  }
};

export default {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  verifyEmail,
  googleLogin,
  refreshToken,
};
