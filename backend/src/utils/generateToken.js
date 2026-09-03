import jwt from 'jsonwebtoken';

export const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET || 'devsecret', { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

export const generateRefreshToken = (id) =>
  jwt.sign({ id }, process.env.JWT_REFRESH_SECRET || 'refreshsecret', { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d' });

export default generateToken;
