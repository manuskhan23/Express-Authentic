export class FacebookProvider {
    constructor(config) {
        if (!config.appId || !config.clientSecret) {
            throw new Error("Facebook credentials are required");
        }
        this.appId = config.appId;
        this.clientSecret = config.clientSecret;
    }
    validateCredentials() {
        return !!this.appId && !!this.clientSecret;
    }
}
