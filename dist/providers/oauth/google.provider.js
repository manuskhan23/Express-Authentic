export class GoogleProvider {
    constructor(config) {
        if (!config.clientId || !config.clientSecret) {
            throw new Error("Google credentials are required");
        }
        this.clientId = config.clientId;
        this.clientSecret = config.clientSecret;
    }
    validateCredentials() {
        return !!this.clientId && !!this.clientSecret;
    }
}
