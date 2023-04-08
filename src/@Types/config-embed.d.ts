type AuthenticationMode = "masteruser" | "serviceprincipal";

export interface Config {
  clientId: string;
  workspaceId: string;
  tenantId: string;
  reportId: string;
  authorityUrl: string;
  authenticationMode: AuthenticationMode;
  scopeBase: string;
  powerBiApiUrl: string;
  pbiUsername: string;
  pbiPassword: string;
  clientSecret?: string;
}