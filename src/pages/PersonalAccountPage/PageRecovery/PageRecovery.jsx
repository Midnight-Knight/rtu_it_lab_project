import React, {useState} from "react";
import Style from "../PersonalAccountPage.module.css";
import {MyInputs} from "../../../components/inputs/inputs";
import {ButtonText} from "../../../components/buttons/buttons";
import axios from "axios";

const CheckEmail = async (email) => {
    let response;
    try {
        const data = await axios.post('http://localhost:2999/check',{email: email});
        response = await data.data.response;
        if (response === true)
        {
            sessionStorage.setItem("email",email);
        }
    }
    catch (e)
    {
        console.error(e);
        response = false;
    }
    return response;
}

export const PageRecovery = (props) => {
    const [Email, SetEmail] = useState("");
    const [Error, SetError] = useState(false);

    const handleConfirmation = async () => {
        const response = await CheckEmail(Email);
        if (response === true) {
            props.func();
        } else {
            SetError(true);
        }
    };

    return (
        <section className={Style.Page}>
            <div className={Style.BlockAuthorization}>
                <h3>Регистрация</h3>
                <MyInputs active={Error} change={(event) => SetEmail(event.target.value)} type={"email"}/>
                <ButtonText widthAuto={true} text="Найти аккаунт" func={() => handleConfirmation()}/>
            </div>
        </section>
    )
}