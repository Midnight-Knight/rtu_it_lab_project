import React, {useEffect, useState} from "react";
import Style from "../PersonalAccountPage.module.css";
import {MyInputs} from "../../../components/inputs/inputs";
import {ButtonText} from "../../../components/buttons/buttons";
import {Server} from "../../../Server";

export const PageRegistration = (props) => {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Password2, SetPassword2] = useState("");
    const [ErrorEmail, SetErrorEmail] = useState(false);
    const [ErrorPassword, SetErrorPassword] = useState(false);
    const [TextEmail, SetTextEmail] = useState("Введите свою электронную почту");
    const [TextPassword, SetTextPassword] = useState("Введите свой пароль");

    const handleConfirmation = async () => {
        const response = await Server.checkAll(Email, Password, Password2);
        if (response.responseEmail === true && response.responsePassword === true)
        {
            props.func();
        }
        else
        {
            if(response.responsePassword !== true)
            {
                SetErrorPassword(true);
                SetTextPassword(response.responsePassword);
            }
            if(response.responseEmail !== true)
            {
                SetErrorEmail(true);
                SetTextEmail(response.responseEmail);
            }
        }
    };

    useEffect(() => {
        SetErrorEmail(false);
        SetTextEmail("Введите свою электронную почту");
    }, [Email]);

    useEffect(() => {
        SetErrorPassword(false);
        SetTextPassword("Введите свой пароль");
    }, [Password, Password2]);

    return (
        <section className={Style.Page}>
            <div className={Style.BlockAuthorization}>
                <h3>Регистрация</h3>
                <MyInputs active={ErrorEmail} valueHeader="Почта" valueFooter={TextEmail} change={(event) => SetEmail(event.target.value)} type={"email"}/>
                <MyInputs active={ErrorPassword} valueHeader="Пароль" valueFooter={TextPassword} change={(event) => SetPassword(event.target.value)} type={"password"}/>
                <MyInputs active={ErrorPassword} valueHeader="Повторите пароль" valueFooter={TextPassword} change={(event) => SetPassword2(event.target.value)} type={"password"}/>
                <ButtonText widthAuto={true} text="Подтвердить аккаунт" func={() => handleConfirmation()}/>
            </div>
        </section>
    )
}