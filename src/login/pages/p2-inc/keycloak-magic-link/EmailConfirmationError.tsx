// THIS FILE CHANGED FOR FEEDS.FUN NEEDS:
// - massive layout and styling changes to fit Feeds Fun branding
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../../../KcContext";
import type { I18n } from "../../../i18n";

export default function EmailConfirmationError(
    props: PageProps<Extract<KcContext, { pageId: "email-confirmation-error.ftl" }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { msg } = i18n;
    const { url } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo={false}
            displayRequiredFields={false}
            displayMessage={false}
            headerNode={msg("magicLinkFailLogin")}
        >
            <div className="mb-6 text-center">
              {url?.loginRestartFlowUrl && (
                <div className="mt-4 flex justify-center">
                  <a
                    id="reset-login"
                    href={url.loginRestartFlowUrl}
                    role="button"
                    className="
                    !no-underline hover:!no-underline focus:!no-underline
                    !text-white hover:!text-white visited:!text-white
                    decoration-transparent hover:decoration-transparent

                    rounded-md bg-primary-600 px-4 py-2 text-sm font-medium
                    inline-flex w-full items-center justify-center

                    hover:bg-primary-700
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                  >
                    {msg("magicLinkFailRestart")}
                  </a>

                </div>
              )}
            </div>
        </Template>
    );
}
