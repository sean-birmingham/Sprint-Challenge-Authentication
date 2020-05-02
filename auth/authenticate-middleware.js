const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, secrets.jwt_secret, (err, decodedToken) => {
        if (err) {
          throw new Error(err);
        } else {
          req.decodedJwt = decodedToken;
          next();
        }
      });
    } else {
      throw new Error('Bad authorization');
    }
  } catch (err) {
    res.status(401).json(err.message);
  }
};
