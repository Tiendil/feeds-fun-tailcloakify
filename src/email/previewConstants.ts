// THIS FILE CREATED FOR FEEDS.FUN NEEDS

import { createVariablesHelper } from "keycloakify-emails/variables";

const { exp } = createVariablesHelper("email-test.ftl");

const _isPreview = import.meta.isJsxEmailPreview;

const _projectName = "Feeds Fun";
const _contactEmail = "support@feeds.fun"
const _magicLinkExample = "https://idp.keycloak.local/realms/dev/login-actions/action-token?key=eyJhbGciOiJIUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJlM2IwMDAxZi00MDA5LTQ3MjYtYThmOS04NGYwMWMwMTM4NDEifQ.eyJleHAiOjE3NjU2NTE4MTEsImlhdCI6MTc2NTU2NTQxMSwic2NvcGUiOiJvcGVuaWQgZW1haWwiLCJqdGkiOiJlN2M3ZDhhMy1jZWQ0LTQxODctYTJmMS0zOGRmZTRiNmNkMDciLCJpc3MiOiJodHRwczovL2lkcC5rZXljbG9hay5sb2NhbC9yZWFsbXMvZGV2IiwiYXVkIjoiaHR0cHM6Ly9pZHAua2V5Y2xvYWsubG9jYWwvcmVhbG1zL2RldiIsInN1YiI6ImE0OGFkY2UxLWZiYWItNGMxMC1iYjg3LWUyODZkZjU4NGQzOSIsInR5cCI6ImV4dC1tYWdpYy1saW5rIiwiYXpwIjoiYXV0aC1wcm94eS1jbGllbnQiLCJub25jZSI6ImIyM2IwNzZiLTcxMzItNGU1OC04MjJkLWQ1YjM3MDIxMWY0YiIsInJkdSI6Imh0dHBzOi8va2V5Y2xvYWsubG9jYWwvb2F1dGgyL2NhbGxiYWNrIiwic3RhdGUiOiJfU2JpQW1uRjdTNUtqWFc2N1lOOUxPcTgzVVcxVjVlRmtfcmVXUVZKcUFROi8iLCJybWUiOmZhbHNlLCJydSI6dHJ1ZSwiY2MiOiJFS0QxakFjMjFVckRGbnY3V2Q5Q1V2c3hzcjhxVVJxeWdDbzlIcEpHVlNrIiwiY2NtIjoiUzI1NiJ9.o6UaicnmEqOh6SU7xXn-_5jgdUbEQ-u_NF5BpVhz7gCMTvJu4zXIAZAYBojTLX4KDDlZUGA1DXjlrGf8MXBpQw&client_id=auth-proxy-client"

export const baseUrl = _isPreview ? '/assets/' : exp("url.resourcesUrl") + "/";
export const realmName = _isPreview ? _projectName : exp("realmName");
export const contactEmail = _contactEmail;
export const magicLink = _isPreview ? _magicLinkExample : (exp as any)("magicLink");

export const IdPName = _isPreview ? "Google" : exp("identityProviderDisplayName");
export const IdPContextUsername = _isPreview ? "test-user@example.com" :  exp("identityProviderContext.username");
export const IdPExpriation = _isPreview ? "5 minutes" : "${linkExpirationFormatter(linkExpiration)}";

export const styleParagraph = {
  fontSize: "1.125rem",
  lineHeight: "1.5rem",
  textAlign: "center" as const
};

export const styleBodyHeader = {
  fontSize: "1.75rem",
  fontWeight: 700,
  marginTop: 0,
  textAlign: "center" as const,
};
