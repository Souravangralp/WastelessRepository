import {LogLevel} from "@azure/msal-browser";
import React from 'react';
import {MsalAuthenticationTemplate} from "@azure/msal-react";
import {InteractionType} from "@azure/msal-browser";

export const b2cPolicies = {
    names: {
        signUpSignIn: "b2c_1_signin"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://lpinfotech.b2clogin.com/lpinfotech.onmicrosoft.com/b2c_1_signin"
        }
    },
    authorityDomain: "lpinfotech.b2clogin.com"
}

export const msalConfig = {
    auth: {
        clientId: "1d6cc04c-5949-46b1-9c23-f30c64b448c4", // This is the ONLY mandatory field that you need to supply.
        authority: b2cPolicies.authorities.signUpSignIn.authority, 
        knownAuthorities: [b2cPolicies.authorityDomain], 
        redirectUri: "https://localhost:5001/", 
        postLogoutRedirectUri: "/", 
        navigateToLoginRequestUrl: false, 
    },
    cache: {
        cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        break;
                }
            }
        }
    }
};

export const protectedResources = {
    api: {
        scopes: ["https://lpinfotech.onmicrosoft.com/lpinfotech-api/lpinfotech_read"],
    },
}

export const loginRequest = {
    scopes: [...protectedResources.api.scopes]
};


export const ProtectedContent = (props) => {
    const authRequest = {
        ...loginRequest
    };

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            {props.children}
        </MsalAuthenticationTemplate>
    )
};
