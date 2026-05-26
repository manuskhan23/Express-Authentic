import bcrypt from "bcrypt";
export class PasswordUtil {
    static async hash(password) {
        return bcrypt.hash(password, 10);
    }
    static async compare(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}
