// THIS FILE CHANGED FOR FEEDS.FUN NEEDS:
// - massive styling changes to fit Feeds Fun branding
// - part of variables replaced with constants for preview purposes
import { render, Text } from "jsx-email";
import { EmailLayout } from "../layout";
import { GetSubject, GetTemplate, GetTemplateProps } from "keycloakify-emails";
// import { variablesHelper } from "../util/VariablesHelper";
import i18n, { TFunction } from "i18next";
import { previewLocale } from "../util/previewLocale";
// Feeds Fun preview constants
import * as c from "../previewConstants";

type TemplateProps = Omit<GetTemplateProps, "plainText"> & { t: TFunction };

export const previewProps: TemplateProps = {
    t: i18n.getFixedT(previewLocale),
    locale: previewLocale,
    themeName: "Tailcloakify"
};

export const templateName = "Magic Link";

// const { exp } = variablesHelper("magic-link-email.ftl");

export const Template = ({ locale, t }: TemplateProps) => (
    <EmailLayout
        preview={t("magic-link-email.messagePreview", {
            realmName: c.realmName
        })}
        locale={locale}
        disclaimer={
          <p style={{...c.styleParagraph, marginTop: "0"}}>
            {t("magic-link-email.disclaimer")}
          </p>
        }
    >
      {/*Can not use Heading here, because it render ALL APPERCASE in text mode
         Which breaks the Keycloak variables (they are case sensitive)*/}
      <Text style={c.styleBodyHeader}>
        {t("magic-link-email.title", {realmName: c.realmName})}
      </Text>

      <Text style={c.styleParagraph}>
            <p style={c.styleParagraph}>{t("magic-link-email.preButtonMessage")}</p>
            <p style={c.styleParagraph}>
              <a href={c.magicLink} style={c.styleButton} rel="notrack">
                {t("magic-link-email.magicLinkButton")}
              </a>
            </p>
        <p style={c.styleParagraph}>
          {t("magic-link-email.preLinkMessage")}
          &nbsp;
          <a href={c.magicLink} rel="notrack">{t("magic-link-email.magicLinkFallbackLink")}</a>
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
    return t("magic-link-email.messageSubject");
};
