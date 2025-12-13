import type { PageProps } from "keycloakify/login/pages/PageProps";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function Error(
    props: PageProps<Extract<KcContext, { pageId: "error.ftl" }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { message, client, skipLink } = kcContext;
    const { msg } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            displayInfo={false}
            displayRequiredFields={false}
            headerNode={
              <span
                className="text-lg font-semibold text-gray-900 leading-snug"
                dangerouslySetInnerHTML={{ __html: kcSanitize(message.summary) }}
              />
            }
        >
            <div className="mb-6 text-center">
            {!skipLink && client?.baseUrl && (
                <div className="mt-4 flex justify-center">
                  <a
                    id="reset-login"
                    href={client.baseUrl}
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
                        {msg("backToApplication")}
                    </a>
                </div>
            )}
            </div>
        </Template>
    );
}
