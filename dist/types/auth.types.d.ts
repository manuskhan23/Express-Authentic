import { Request } from "express";
export interface User {
    id?: string;
    email: string;
    password?: string;
}
export interface AuthRequest extends Request {
    user?: {
        email: string;
    };
}
