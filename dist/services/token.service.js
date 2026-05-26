import jwt from "jsonwebtoken";
import { config } from "../config/index.js";
export class TokenService {
    static generateToken(payload) {
        return jwt.sign(payload, config.jwtSecret, {
            expiresIn: "7d"
        });
    }
    static verifyToken(token) {
        return jwt.verify(token, config.jwtSecret);
    }
}
