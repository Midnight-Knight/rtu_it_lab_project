import React, {useEffect, useState} from "react";
import Style from "../PersonalAccountPage.module.css";
import {MyInputs} from "../../../components/inputs/inputs";
import {ButtonText} from "../../../components/buttons/buttons";
import {Server} from "../../../Server";

export const PageNewPassword = (props) => {
    const [Password1, SetPassword1] = useState("");
    const [Password2, SetPassword2] = useState("");
    const [Error, SetError] = useState(false);
    const [Text, SetText] = useState("Введите свою новый пароль");

    const handleConfirmation = async () => {
        const response = await Server.password(Password1, Password2);
        if (response === true) {
            props.func();
        } else {
            SetError(true);
            SetText(response);
        }
    };

    useEffect(() => {
        SetError(false);
        SetText("Введите свою новый пароль");
    }, [Password1, Password2])

    return (
        <section className={Style.Page}>
            <div className={Style.BlockAuthorization}>
                <h3>Восстановление пароля</h3>
                <MyInputs active={Error} valueHeader="Пароль" valueFooter={Text} change={(event) => SetPassword1(event.target.value)} type={"password"}/>
                <MyInputs active={Error} valueHeader="Повторите пароль" valueFooter={Text} change={(event) => SetPassword2(event.target.value)} type={"password"}/>
                <ButtonText widthAuto={true} text="Изменить пароль" func={() => handleConfirmation()}/>
            </div>
        </section>
    )
}