export class ValidatorUtil {
  static validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  }

  static validatePassword(password: string): boolean {
    return password.length >= 6;
  }
}