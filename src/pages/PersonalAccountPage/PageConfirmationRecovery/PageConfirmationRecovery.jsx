import React, {useEffect, useState} from "react";
import Style from "../PersonalAccountPage.module.css";
import {MyInputs} from "../../../components/inputs/inputs";
import {ButtonText} from "../../../components/buttons/buttons";
import {Server} from "../../../Server";

export const PageConfirmationRecovery = (props) => {
    const [Code, SetCode] = useState(undefined);
    const [Input, SetInput] = useState("");
    const [Error, SetError] = useState(false);
    const [Text, SetText] = useState("Введите код из письма");

    useEffect(() => {
        if (Code !== undefined)
        {
            Server.message(sessionStorage.getItem('email'),"Восстановление пароля","Ваш индивидуальный код для регистрации аккаунта: "+Code);
        }
    }, [Code])

    useEffect(() => {
        SetError(false);
        SetText("Введите код из письма");
    }, [Input])

    const handleConfirmation = async () => {
        if (Code === Number(Input) && Code !== undefined) {
            props.func();
        } else {
            SetText("Ошибка! Код неверный!");
            SetError(true);
        }
    };

    return (
        <section className={Style.Page}>
            <div className={Style.BlockAuthorization}>
                <h3>Подтверждение аккаунта</h3>
                <MyInputs active={Error} valueHeader="Код" valueFooter={Text} change={(event) => SetInput(event.target.value)} type={"text"}/>
                <ButtonText widthAuto={true} text="Отправить код на почту" func={() => SetCode(Math.floor(Math.random() * 9000) + 1000)}/>
                <ButtonText widthAuto={true} text="Подтвердить почту" func={handleConfirmation}/>
            </div>
        </section>
    )
}