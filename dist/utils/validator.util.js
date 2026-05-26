export class ValidatorUtil {
    static validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    static validatePassword(password) {
        return password.length >= 6;
    }
}
