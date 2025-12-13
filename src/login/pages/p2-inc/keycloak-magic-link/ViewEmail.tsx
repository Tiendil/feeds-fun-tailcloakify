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
          <p className="mb-6 flex items-center justify-center text-center">

            <span className="font-semibold text-gray-900 text-xl mr-2 align-middle">
              {auth.attemptedUsername}
            </span>

            <a id="reset-login"
              href={url.loginRestartFlowUrl}
              className="text-sm text-blue-700 hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 align-middle"

            >
              {msg("viewEmailChangeEmail")}
            </a>
          </p>

          <ul  className="mb-6 space-y-1 text-xs text-gray-900">
            <li>{msg("viewEmailDeliverTime")}</li>
            <li>{msg("viewEmailSpamNote")}</li>
            <li>{msg("viewEmailBrowserNote")}</li>
          </ul>

        </Template>
    );
}
