import nodemailer from "nodemailer";
export class GmailProvider {
    constructor(config) {
        if (!config.user || !config.pass) {
            throw new Error("Gmail credentials are required");
        }
        this.user = config.user;
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.user,
                pass: config.pass
            }
        });
    }
    async sendOTP(email, otp) {
        return this.transporter.sendMail({
            from: this.user,
            to: email,
            subject: "OTP Verification",
            text: `Your OTP is ${otp}`
        });
    }
}
