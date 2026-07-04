// THIS FILE CHANGED FOR FEEDS.FUN NEEDS:
// - massive styling changes to fit Feeds Fun branding
// - part of variables replaced with constants for preview purposes
import { render, Text } from "jsx-email";
import { GetSubject, GetTemplate, GetTemplateProps } from "keycloakify-emails";
import { EmailLayout } from "../layout.tsx";
import { createVariablesHelper } from "keycloakify-emails/variables";
import { previewLocale } from "../util/previewLocale.ts";
import { TFunction } from "i18next";
import i18n from "../i18n.ts";
import * as c from "../previewConstants";

type TemplateProps = Omit<GetTemplateProps, "plainText"> & { t: TFunction };

export const previewProps: TemplateProps = {
    t: i18n.getFixedT(previewLocale),
    locale: previewLocale,
    themeName: "Tailcloakify"
};

export const templateName = "Identity Provider Link";

const { exp } = createVariablesHelper("identity-provider-link.ftl");

export const Template = ({ locale, t }: TemplateProps) => (
    <EmailLayout
        preview={t("identity-provider-link.messagePreview")}
        locale={locale}
      disclaimer={
          <p style={{...c.styleParagraph, marginTop: "0"}}>
            {t("identity-provider-link.disclaimer")}
          </p>
         }
    >
      {/*Can not use Heading here, because it render ALL APPERCASE in text mode
         Which breaks the Keycloak variables (they are case sensitive)*/}
      <Text style={c.styleBodyHeader}>
        {t("identity-provider-link.title", {identityProviderDisplayName: c.IdPName})}
      </Text>
        <Text style={c.styleParagraph}>
          <p style={c.styleParagraph}>
            {t("identity-provider-link.messageBody1", {
              realmName: c.realmName,
              identityProviderDisplayName: c.IdPName,
              username: c.IdPContextUsername
            })}
          </p>

          <p style={c.styleParagraph}>
            {t("identity-provider-link.messageBody2")}
          </p>

          <p style={c.styleParagraph}>
            <a href={exp("link")} style={c.styleButton} rel="notrack">{t("identity-provider-link.messageLink")}</a>
          </p>

          <p style={c.styleParagraph}>
            {t("identity-provider-link.linkExpiry", {
              linkExpiration: c.IdPExpriation,
              interpolation: { escapeValue: false }
            })}
          </p>
        </Text>
    </EmailLayout>
);

export const getTemplate: GetTemplate = async props => {
    const t = i18n.getFixedT(props.locale);
    return await render(<Template {...props} t={t} />, { plainText: props.plainText });
};

export const getSubject: GetSubject = async _props => {
  const t = i18n.getFixedT(_props.locale);
  return t("identity-provider-link.messageSubject");
};
