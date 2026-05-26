import { ProviderConfig } from "../../types/provider.types.js";

export class FacebookProvider {
  private appId: string;
  private clientSecret: string;

  constructor(config: ProviderConfig) {
    if (!config.appId || !config.clientSecret) {
      throw new Error("Facebook credentials are required");
    }

    this.appId = config.appId;
    this.clientSecret = config.clientSecret;
  }

  validateCredentials(): boolean {
    return !!this.appId && !!this.clientSecret;
  }
}