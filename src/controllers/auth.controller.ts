import { Request, Response } from "express";
import { AuthService } from "../services/auth.service.js";

const authService = new AuthService();

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const response = await authService.register(req.body);

      res.status(201).json({
        success: true,
        data: response
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          success: false,
          message: error.message
        });
      }
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const response = await authService.login(req.body);

      res.status(200).json({
        success: true,
        data: response
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          success: false,
          message: error.message
        });
      }
    }
  }
}