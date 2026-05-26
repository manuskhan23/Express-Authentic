import { ProviderConfig } from "../../types/provider.types.js";

export class AppleProvider {
  private clientId: string;
  private clientSecret: string;

  constructor(config: ProviderConfig) {
    if (!config.clientId || !config.clientSecret) {
      throw new Error("Apple credentials are required");
    }

    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
  }

  validateCredentials(): boolean {
    return !!this.clientId && !!this.clientSecret;
  }
}