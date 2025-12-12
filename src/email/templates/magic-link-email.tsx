// THIS FILE CHANGED FOR FEEDS.FUN NEEDS:
// - fixed magic link url
// - massive styling changes to fit Feeds Fun branding
// - part of variables replaced with constants for preview purposes
import { render, Text } from "jsx-email";
import { EmailLayout } from "../layout";
import { GetSubject, GetTemplate, GetTemplateProps } from "keycloakify-emails";
import { variablesHelper } from "../util/VariablesHelper";
import i18n, { TFunction } from "i18next";
import { previewLocale } from "../util/previewLocale";
// Feeds Fun preview constants
import * as c from "../previewConstants";

type TemplateProps = Omit<GetTemplateProps, "plainText"> & { t: TFunction };

const paragraph = {
    fontSize: "1.125rem",
    lineHeight: "24px",
    textAlign: "center" as const
};

export const previewProps: TemplateProps = {
    t: i18n.getFixedT(previewLocale),
    locale: previewLocale,
    themeName: "Tailcloakify"
};

export const templateName = "Magic Link";

const { exp } = variablesHelper("magic-link-email.ftl");

export const Template = ({ locale, t }: TemplateProps) => (
    <EmailLayout
        preview={t("magic-link-email.messagePreview", {
            realmName: c.realmName
        })}
        locale={locale}
        disclaimer={
          <p style={{...paragraph, marginTop: "0"}}>
            {t("magic-link-email.disclaimer")}
          </p>
        }
    >
      {/*Can not use Heading here, because it render ALL APPERCASE in text mode
         Which breaks the Keycloak variables (they are case sensitive)*/}
      <Text
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginTop: 0,
          textAlign: "center" as const,
        }}
      >
         Login to {c.realmName}
      </Text>

      <Text style={paragraph}>
            <p style={paragraph}>{t("magic-link-email.preButtonMessage")}</p>
            <p style={paragraph}>
              <a href={c.magicLink}
                style={{
                  background: '#059669', // tailwind bg-emerald-600 like for the "register" button
                  fontSize: '1.125rem',
                  lineHeight: '24px',
                  fontWeight: '700',
                  fontFamily: '\'Helvetica\',sans-serif', // TODO
                  textDecoration: 'none',
                  padding: '9px 25px 9px 25px',
                  color: '#ffffff',
                  display: 'block',
                  borderRadius: '6px',
                  width: 'fit-content',
                  margin: '0 auto'
                }}
              >
                {t("magic-link-email.magicLinkButton")}
              </a>
            </p>
            <p style={paragraph}>{t("magic-link-email.preLinkMessage")}</p>
            <p style={{...paragraph, }}>
              <a href={c.magicLink}>{t("magic-link-email.magicLinkFallbackLink")}</a>
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
