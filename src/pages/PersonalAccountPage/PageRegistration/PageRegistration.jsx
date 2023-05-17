import React, {useState} from "react";
import Style from "../PersonalAccountPage.module.css";
import {MyInputs} from "../../../components/inputs/inputs";
import {ButtonText} from "../../../components/buttons/buttons";
import axios from "axios";
import {getCookieExpiration, setAccountCookie} from "../../../cookie";

const CheckPassword = (password1, password2) => {
    if (password1 === password2 && password1 !== undefined && password2 !== undefined)
    {
        sessionStorage.setItem("password",password1);
        return true;
    }
    else
    {
        return false;
    }
}

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
    console.log(response);
    return response;
}

export const PageRegistration = (props) => {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Password2, SetPassword2] = useState("");
    const [Error, SetError] = useState(false);

    return (
        <section className={Style.Page}>
            <div className={Style.BlockAuthorization}>
                <h3>Регистрация</h3>
                <MyInputs active={Error} change={(event) => SetEmail(event.target.value)} type={"email"}/>
                <MyInputs active={Error} change={(event) => SetPassword(event.target.value)} type={"password"}/>
                <MyInputs active={Error} change={(event) => SetPassword2(event.target.value)} type={"password"}/>
                <ButtonText widthAuto={true} text="Отправить код на почту" func={() => (CheckPassword(Password, Password2) === false ? SetError(true)
                    : CheckEmail(Email) === false ? SetError(true) : props.func)}/>
            </div>
        </section>
    )
}