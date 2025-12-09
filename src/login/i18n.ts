// THIS FILE CHANGED FOR FEEDS.FUN NEEDS:
// - removed unused languages
// - added/updated custom translations

import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/i18n */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            // Original Tailcloakify translations
            footerImprintTitle: "Imprint",
            footerDataProtectionTitle: "Data Protection",
            footerCookiePreferencesTitle: "Cookie Preferences",
            doResend: "Resend",
            magicLinkConfirmation: "Check your email, and click on the link to log in!",
            magicLinkContinuationConfirmation:
                "Check your email, and click on the link to log in! Please do not close this tab.",
            magicLinkSuccessfulLogin:
                "Authentication session confirmed. Please return to login page tab.",
            magicLinkFailLogin:
                "Authentication session expired. Please close this tab and restart the login flow.",
            loginPage: "Login page",
            multipleSessionsError:
                "Multiple login sessions opened on same browser. Please close it and restart login.",
            p2incMagicLinkOtpFormTitle: "Email OTP",
            p2incOrgsTitle: "Invitations",
            p2incOrgsText: "You have been invited to join the following organizations. Uncheck those you wish to decline.",
            loginOtpOneTimeLabel: "Please Input your One-time code",

            // Feeds Fun overrides
            doLogIn: "Continue",
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
