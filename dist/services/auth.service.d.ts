import { User } from "../types/auth.types.js";
export declare class AuthService {
    register(user: User): Promise<{
        email: string;
        password: string;
    }>;
    login(user: User): Promise<{
        accessToken: string;
    }>;
}
