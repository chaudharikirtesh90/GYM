export const validateRegisterInput = ({ fullName, email, password }) => {
  if (!fullName || fullName.trim().length < 2) {
    return 'Full name must be at least 2 characters long.';
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please provide a valid email address.';
  }
  if (!password || password.length < 6) {
    return 'Password must be at least 6 characters long.';
  }
  return null;
};
