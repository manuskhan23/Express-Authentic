import { ProviderConfig } from "../../types/provider.types.js";
export declare class GithubProvider {
    private clientId;
    private clientSecret;
    constructor(config: ProviderConfig);
    validateCredentials(): boolean;
}
