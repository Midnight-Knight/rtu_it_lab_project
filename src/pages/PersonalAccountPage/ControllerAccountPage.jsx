import React, {useState} from "react";
import {PageAuthorization} from "./PageAuthorization/PageAuthorization";
import {PageRegistration} from "./PageRegistration/PageRegistration";
import {PageConfirmationRegistration} from "./PageConfirmationRegistration/PageConfirmationRegistration";
import {checkAccount} from "../../cookie";
import {PageRecovery} from "./PageRecovery/PageRecovery";
import {PageConfirmationRecovery} from "./PageConfirmationRecovery/PageConfirmationRecovery";
import {PageNewPassword} from "./PageNewPassword/PageNewPassword";
import {PageAccount} from "./PageAccount/PageAccount";

export const ControllerAccountPage = () => {
    const [StatusAccount, SetStatusAccount] = useState(checkAccount() === undefined ? 1 : 0);
    switch (checkAccount())
    {
        case undefined:
            switch (StatusAccount)
            {
                case 2:
                    return (
                        <PageRegistration func={() => SetStatusAccount(3)}/>
                        )
                case 3:
                    return (
                        <PageConfirmationRegistration func={() => SetStatusAccount(0)}/>
                    )
                case 4:
                    return (
                        <PageRecovery func={() => SetStatusAccount(5)}/>
                    )
                case 5:
                    return (
                        <PageConfirmationRecovery func={() => SetStatusAccount(6)}/>
                    )
                case 6:
                    return (
                       <PageNewPassword func={() => SetStatusAccount(0)}/>
                    )
                case 1: default:
                    return (
                        <PageAuthorization funcAut={() => SetStatusAccount(0)} funcReg={() => SetStatusAccount(2)} funcRec={() => SetStatusAccount(4)}/>
                    )
            }
        default:
            return (
                <PageAccount/>
            )
    }
}