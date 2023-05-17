import React, {useState} from "react";
import Style from "./PersonalAccountPage.module.css";
import {MyInputs} from "../../components/inputs/inputs";
import {ButtonText} from "../../components/buttons/buttons";
import {PageAuthorization} from "./PageAuthorization/PageAuthorization";

export const PersonalAccountPage = (props) => {
    const [StatusAccount, SetStatusAccount] = useState(props.account === undefined ? 1 : 0);
    switch (props.account)
    {
        case undefined:
            switch (StatusAccount)
            {
                case 2:
                    return (
                        <section className={Style.Page}>
                            <div className={Style.BlockAuthorization}>
                                <h3>Регистрация</h3>
                                <MyInputs type={"email"}/>
                                <MyInputs type={"password"}/>
                                <MyInputs type={"password"}/>
                                <ButtonText widthAuto={true} text="Отправить код на почту" func={() => SetStatusAccount(5)}/>
                            </div>
                        </section>
                    )
                case 3:
                    return (
                        <section className={Style.Page}>
                            <div className={Style.BlockAuthorization}>
                                <h3>Подтверждение</h3>
                                <MyInputs type={"password"}/>
                                <ButtonText widthAuto={true} text="Подтвердить почту" func={() => SetStatusAccount(1)}/>
                            </div>
                        </section>
                    )
                case 4:
                case 5:
                    return (
                        <section className={Style.Page}>
                            <div className={Style.BlockAuthorization}>
                                <h3>Подтверждение</h3>
                                <MyInputs type={"password"}/>
                                <ButtonText widthAuto={true} text="Подтвердить почту" func={() => SetStatusAccount(1)}/>
                            </div>
                        </section>
                    )
                case 6:
                    return (
                       <></>
                    )
                case 1: default:
                    return (
                        <PageAuthorization funcAut={() => SetStatusAccount(0)} funcReg={() => SetStatusAccount(2)} funcRec={() => SetStatusAccount(4)}/>
                    )
            }
        default:
            return (
                <section>

                </section>
            )
    }
}