// THIS FILE CREATED FOR FEEDS.FUN NEEDS

import { createVariablesHelper } from "keycloakify-emails/variables";

const { exp } = createVariablesHelper("email-test.ftl");

const _projectName = "Feeds Fun";
const _contactEmail = "support@feeds.fun"

export const baseUrl = import.meta.isJsxEmailPreview ? '/assets/' : exp("url.resourcesUrl") + "/";
export const realmName = import.meta.isJsxEmailPreview ? _projectName : exp("realmName");
export const contactEmail = _contactEmail;
