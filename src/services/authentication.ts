import { Config } from "@/@Types/config-embed";
import {
    PublicClientApplication,
    ConfidentialClientApplication,
    Configuration,
    AuthenticationResult
} from "@azure/msal-node";

const configInput = require("@/config/config.json");

export async function getAccessToken(): Promise<string> {
  const config: Config = configInput;

  const msalConfig: Configuration = {
    auth: {
      clientId: config.clientId,
      authority: `${config.authorityUrl}${config.tenantId}`,
    },
  };

  if (config.authenticationMode.toLocaleLowerCase() === "masteruser") {
    const { scopeBase, pbiUsername, pbiPassword } = config;
    const clientApplication = new PublicClientApplication(msalConfig);

    const usernamePasswordRequest = {
      scopes: [scopeBase],
      username: pbiUsername,
      password: pbiPassword,
    };
    const response = await clientApplication.acquireTokenByUsernamePassword(usernamePasswordRequest);
    return response?.accessToken ?? "";
  }

  if (config.authenticationMode.toLocaleLowerCase() === "serviceprincipal") {
    const { scopeBase, clientSecret } = config;
    msalConfig.auth.clientSecret = clientSecret;

    const clientApplication = new ConfidentialClientApplication(msalConfig);

    const clientCredentialRequest = {
      scopes: [scopeBase],
    };

    const response = await clientApplication.acquireTokenByClientCredential(clientCredentialRequest);
    return response?.accessToken ?? "";
  }

  throw new Error(`Invalid authentication mode specified in configuration: ${config.authenticationMode}`);
}