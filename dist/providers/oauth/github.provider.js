export class GithubProvider {
    constructor(config) {
        if (!config.clientId || !config.clientSecret) {
            throw new Error("Github credentials are required");
        }
        this.clientId = config.clientId;
        this.clientSecret = config.clientSecret;
    }
    validateCredentials() {
        return !!this.clientId && !!this.clientSecret;
    }
}
