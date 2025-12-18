// THIS FILE CHANGED FOR FEEDS.FUN NEEDS:
// - extensive restyling
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import * as c from "../constants";

export default function LoginIdpLinkEmail(
    props: PageProps<
        Extract<
            KcContext,
            {
                pageId: "login-idp-link-email.ftl";
            }
        >,
        I18n
    >
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { url, realm, brokerContext, idpAlias } = kcContext;

    const { msg } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
          headerNode={
            <>
              <span>{msg("emailLinkIdpTitle", idpAlias)}</span>
              <span className={c.subheaderClasses}>
                {msg("emailLinkIdp1", idpAlias, brokerContext.username, realm.displayName)}
              </span>
            </>
          }
        >
          <ul className={c.footerNotesListClasses}>
            <li>{msg("emailLinkIdp2")}</li>
            <li><a href={url.loginAction} className={c.anchorClasses}>{msg("doClickHere")}</a>{" "}{msg("emailLinkIdp3")}</li>
            <li>&nbsp;</li>
            <li>{msg("emailLinkIdp4")}</li>
            <li><a href={url.loginAction} className={c.anchorClasses}>{msg("doClickHere")}</a>{" "}{msg("emailLinkIdp5")}</li>
          </ul>

        </Template>
    );
}
