import React, {useEffect, useState} from "react";
import Style from "../PersonalAccountPage.module.css";
import {MyInputs} from "../../../components/inputs/inputs";
import {ButtonText} from "../../../components/buttons/buttons";
import {Server} from "../../../Server";



export const PageAuthorization = (props) => {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [ErrorEmail, SetErrorEmail] = useState(false);
    const [ErrorPassword, SetErrorPassword] = useState(false);
    const [TextEmail, SetTextEmail] = useState("Введите свою электронную почту");
    const [TextPassword, SetTextPassword] = useState("Введите свой пароль");

    const handleConfirmation = async () => {
        const response = await Server.authorization(Email, Password);
        if (response.responseEmail === true && response.responsePassword === true) {
            props.funcAut();
        } else {
            if (response.responseEmail !== true)
            {
                SetErrorEmail(true);
                SetTextEmail(response.responseEmail);
            }
            if (response.responsePassword !== true)
            {
                SetErrorPassword(true);
                SetTextPassword(response.responsePassword);
            }
        }
    };

    useEffect(() => {
        SetErrorEmail(false);
        SetTextEmail("Введите свою электронную почту");
    }, [Email])

    useEffect(() => {
        SetErrorPassword(false);
        SetTextPassword("Введите свой пароль");
    }, [Password])

    return (
        <section className={Style.Page}>
            <div className={Style.BlockAuthorization}>
                <h3>Авторизация</h3>
                <MyInputs active={ErrorEmail} valueHeader="Почта" valueFooter={TextEmail} change={(event) => SetEmail(event.target.value)} type={"email"}/>
                <MyInputs active={ErrorPassword} valueHeader="Пароль" valueFooter={TextPassword} change={(event) => SetPassword(event.target.value)} type={"password"}/>
                <ButtonText widthAuto={true} text="Войти" func={() => handleConfirmation()}/>
                <ButtonText widthAuto={true} text="Регистрация" func={props.funcReg}/>
                <ButtonText widthAuto={true} text="Восстановление пароля" func={props.funcRec}/>
            </div>
        </section>
    )
}