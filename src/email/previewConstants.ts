// THIS FILE CREATED FOR FEEDS.FUN NEEDS

import { createVariablesHelper } from "keycloakify-emails/variables";

const { exp } = createVariablesHelper("email-test.ftl");

const _projectName = "Feeds Fun";
const _projectAssetBaseUrl = "https://assets.example.com/";  // TODO

export const baseUrl = import.meta.isJsxEmailPreview ? '/assets/' : _projectAssetBaseUrl;
export const realmName = import.meta.isJsxEmailPreview ? _projectName : exp("realmName");
