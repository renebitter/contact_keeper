const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  // Get Token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
