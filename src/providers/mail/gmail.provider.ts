import nodemailer from "nodemailer";
import { GmailConfig } from "../../types/provider.types.js";

export class GmailProvider {
  private transporter: nodemailer.Transporter;
  private user: string;

  constructor(config: GmailConfig) {
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

  async sendOTP(email: string, otp: string) {
    return this.transporter.sendMail({
      from: this.user,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}`
    });
  }
}