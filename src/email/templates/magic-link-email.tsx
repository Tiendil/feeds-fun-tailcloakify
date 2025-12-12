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
    color: "#777",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const
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
        disclaimer={t("magic-link-email.disclaimer")}
    >
      {/*Can not use Heading here, because it render ALL APPERCASE in text mode
         Which breaks the Keycloak variables (they are case sensitive)*/}
      <Text
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginTop: 0,
          textAlign: "center",
        }}
      >
         Login to {c.realmName}
      </Text>

        <Text style={paragraph}>
            <p>{t("magic-link-email.messageBody", { realmName: c.realmName })}</p>
            <p>
              {/* Feeds Fun changes */}
              {/* @ts-expect-error */}
              <a href={exp("magicLink")}>{t("magic-link-email.magicLink")}</a>
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
