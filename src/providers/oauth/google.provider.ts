import { ProviderConfig } from "../../types/provider.types.js";

export class GoogleProvider {
  private clientId: string;
  private clientSecret: string;

  constructor(config: ProviderConfig) {
    if (!config.clientId || !config.clientSecret) {
      throw new Error("Google credentials are required");
    }

    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
  }

  validateCredentials(): boolean {
    return !!this.clientId && !!this.clientSecret;
  }
}