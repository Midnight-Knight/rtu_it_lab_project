import React, {useState} from "react";
import Style from "../PersonalAccountPage.module.css";
import {MyInputs} from "../../../components/inputs/inputs";
import {ButtonText} from "../../../components/buttons/buttons";
import axios from "axios";
import {setAccountCookie, getCookieExpiration} from "../../../cookie";


const API = async (email = "", password = "") => {
    let response;
    try {
        const data = await axios.post('/authorization',{email: email, password: password});
        if (data.data === true)
        {
            setAccountCookie(email, password, getCookieExpiration(3));
        }
        response = await data.data;
    }
    catch (e)
    {
        console.error(e);
        response = false;
    }
    return response;
}
export const PageAuthorization = (props) => {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Error, SetError] = useState(false);

    return (
        <section className={Style.Page}>
            <div className={Style.BlockAuthorization}>
                <h3>Авторизация</h3>
                <MyInputs active={Error} change={(event) => SetEmail(event.target.value)} type={"email"}/>
                <MyInputs active={Error} change={(event) => SetPassword(event.target.value)} type={"password"}/>
                <ButtonText widthAuto={true} text="Войти" func={() => (API(Email, Password) === true ? props.funcAut : SetError(true))}/>
                <ButtonText widthAuto={true} text="Регистрация" func={props.funcReg}/>
                <ButtonText widthAuto={true} text="Восстановление пароля" func={props.funcRec}/>
            </div>
        </section>
    )
}