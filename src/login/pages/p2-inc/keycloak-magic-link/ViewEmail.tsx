// THIS FILE CHANGED FOR FEEDS.FUN NEEDS:
// - massive layout and styling changes to fit Feeds Fun branding
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../../../KcContext";
import type { I18n } from "../../../i18n";

export default function ViewEmail(props: PageProps<Extract<KcContext, { pageId: "view-email.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msg, msgStr } = i18n;

    const { url, auth } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo={false}
            displayRequiredFields={false}
            displayMessage={false}
            headerNode={msgStr("viewEmailLoginLinkSentTo")}
        >
          <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>

            <span id="kc-attempted-username" style={{ fontWeight: "bold", color: "#111", verticalAlign: "middle" }}>
              {auth.attemptedUsername}
            </span>

            <a id="reset-login"
              href={url.loginRestartFlowUrl}
              style={{ fontSize: "0.875rem", color: "#1d4ed8", verticalAlign: "middle" }}
            >
              {msg("viewEmailChangeEmail")}
            </a>
          </p>

          <ul style={{ marginBottom: "1.5rem", color: "#111", fontSize: "0.75rem" }}>
            <li>{msg("viewEmailDeliverTime")}</li>
            <li>{msg("viewEmailSpamNote")}</li>
            <li>{msg("viewEmailBrowserNote")}</li>
          </ul>

        </Template>
    );
}
