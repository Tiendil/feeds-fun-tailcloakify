// THIS FILE CHANGED FOR FEEDS.FUN NEEDS:
// - massive layout and styling changes to fit Feeds Fun branding
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../../../KcContext";
import type { I18n } from "../../../i18n";
import * as c from "../../../constants";

export default function ViewEmail(props: PageProps<Extract<KcContext, { pageId: "view-email.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

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
          <div className="mb-6 text-center">
            <div className="text-lg font-semibold text-gray-900">
              {auth.attemptedUsername}
            </div>

            <div className="mt-1 text-sm">
              <a id="reset-login" href={url.loginRestartFlowUrl} className={c.anchorClasses}>
                {msg("viewEmailChangeEmail")}
              </a>
            </div>
          </div>

          <ul className={c.footerNotesListClasses}>
            <li>{msg("viewEmailDeliverTime")}</li>
            <li>{msg("viewEmailSpamNote")}</li>
            <li>{msg("viewEmailBrowserNote")}</li>
          </ul>

        </Template>
    );
}
