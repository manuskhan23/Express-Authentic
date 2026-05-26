import { NextFunction, Response } from "express";
import { AuthRequest } from "../types/auth.types.js";
import { TokenService } from "../services/token.service.js";

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
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

    req.user = decoded as { email: string };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};