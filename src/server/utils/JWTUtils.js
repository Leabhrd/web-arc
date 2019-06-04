const jwt = require('jsonwebtoken');
require('dotenv').config();
const config = require('../../../config')
const jwtSecret =config.JWT_TOKEN;


export default class JWTUtils {
  static sign(payload){
    return jwt.sign(`${payload}`, jwtSecret);
  }

  static extractPayload(token) {
    return jwt.verify(token, jwtSecret);
  }
}
