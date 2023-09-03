const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {

    if (req.headers.authorization.split(" ")[1] == "undefined" ||
      req.headers.authorization.split(" ")[1] == undefined ||
      req.headers.authorization.split(" ")[1] == "null" ||
      req.headers.authorization.split(" ")[1] == null) {
      req.userData = { email: null, userId: null, role: null };
      next();
    } else {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token,12345);
      req.userData = { email: decodedToken.email, userId: decodedToken.userId, role: decodedToken.role };
      next();
    }
  } catch (err) {
    console.log('Error getting authorization info/token: ' + err);
    res.status(401).json({ message: 'Invalid authorizationYou are not authenticated!' });// 401 for authentication failure
  }
}