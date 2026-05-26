import { ProviderConfig } from "../../types/provider.types.js";
export declare class FacebookProvider {
    private appId;
    private clientSecret;
    constructor(config: ProviderConfig);
    validateCredentials(): boolean;
}
