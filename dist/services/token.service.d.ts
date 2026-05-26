import jwt from "jsonwebtoken";
export declare class TokenService {
    static generateToken(payload: object): string;
    static verifyToken(token: string): string | jwt.JwtPayload;
}
