import { GmailConfig } from "../../types/provider.types.js";
export declare class GmailProvider {
    private transporter;
    private user;
    constructor(config: GmailConfig);
    sendOTP(email: string, otp: string): Promise<any>;
}
