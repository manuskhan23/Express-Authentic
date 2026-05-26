import { NextFunction, Response } from "express";
import { AuthRequest } from "../types/auth.types.js";
export declare const authMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
