import React, {useEffect, useState} from "react";
import Style from "../PersonalAccountPage.module.css";
import {MyInputs} from "../../../components/inputs/inputs";
import {ButtonText} from "../../../components/buttons/buttons";
import {Server} from "../../../Server";



export const PageRecovery = (props) => {
    const [Email, SetEmail] = useState("");
    const [Error, SetError] = useState(false);
    const [Text, SetText] = useState("Введите свою электронную почту");

    const handleConfirmation = async () => {
        const response = await Server.checkEmail(Email);
        if (response === true) {
            props.func();
        } else {
            SetError(true);
            SetText(response);
        }
    };

    useEffect(() => {
        SetError(false);
        SetText("Введите свою электронную почту");
    }, [Email])

    return (
        <section className={Style.Page}>
            <div className={Style.BlockAuthorization}>
                <h3>Восстановление пароля</h3>
                <MyInputs active={Error} valueHeader="Почта" valueFooter={Text} change={(event) => SetEmail(event.target.value)} type={"email"}/>
                <ButtonText widthAuto={true} text="Найти аккаунт" func={() => handleConfirmation()}/>
            </div>
        </section>
    )
}