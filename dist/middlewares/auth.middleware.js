import { TokenService } from "../services/token.service.js";
export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization token missing"
            });
        }
        const token = authHeader.split(" ")[1];
        const decoded = TokenService.verifyToken(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};
