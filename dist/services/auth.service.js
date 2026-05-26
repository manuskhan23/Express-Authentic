import { PasswordUtil } from "../utils/password.util.js";
import { ValidatorUtil } from "../utils/validator.util.js";
import { TokenService } from "./token.service.js";
export class AuthService {
    async register(user) {
        const { email, password } = user;
        if (!ValidatorUtil.validateEmail(email)) {
            throw new Error("Invalid email format");
        }
        if (!password || !ValidatorUtil.validatePassword(password)) {
            throw new Error("Password must be at least 6 characters");
        }
        const hashedPassword = await PasswordUtil.hash(password);
        return {
            email,
            password: hashedPassword
        };
    }
    async login(user) {
        const { email } = user;
        if (!ValidatorUtil.validateEmail(email)) {
            throw new Error("Invalid email format");
        }
        const token = TokenService.generateToken({
            email
        });
        return {
            accessToken: token
        };
    }
}
