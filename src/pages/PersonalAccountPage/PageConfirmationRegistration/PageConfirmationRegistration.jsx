import React, {useEffect, useState} from "react";
import Style from "../PersonalAccountPage.module.css";
import {MyInputs} from "../../../components/inputs/inputs";
import {ButtonText} from "../../../components/buttons/buttons";
import axios from "axios";
import {setAccountCookie, getCookieExpiration} from "../../../cookie";

const API = async (code) => {
    let response;
    try {
        const data = await axios.post('http://localhost:2999/code',{email: sessionStorage.getItem('email'), code: code});
        response = await data.data;
    }
    catch (e)
    {
        console.error(e);
        response = false;
    }
    return response;
}

const CheckCode = async (Input, Code) => {
    if (Input === Code)
    {
        let response;
        try {
            const data = await axios.post('http://localhost:2999/registration',{email: sessionStorage.getItem('email'), password: sessionStorage.getItem('password')});
            if (data.data.response === true)
            {
                setAccountCookie(sessionStorage.getItem('email'),sessionStorage.getItem('password'),getCookieExpiration(3));
            }
            response = await data.data.response;
        }
        catch (e)
        {
            console.error(e);
            response = false;
        }
        return response;
    }
    else
    {
        return false;
    }
}
export const PageConfirmationRegistration = (props) => {
    const [Code, SetCode] = useState(undefined);
    const [Input, SetInput] = useState("");
    const [Error, SetError] = useState(false);

    useEffect(() => {
        if (Code !== undefined)
        {
            API(Code);
        }
    }, [Code])

    const handleConfirmation = async () => {
        const response = await CheckCode(Number(Input), Code);
        if (response === true) {
            props.func();
        } else {
            SetError(true);
        }
    };

    return (
        <section className={Style.Page}>
            <div className={Style.BlockAuthorization}>
                <h3>Подтверждение</h3>
                <MyInputs active={Error} change={(event) => SetInput(event.target.value)} type={"text"}/>
                <ButtonText widthAuto={true} text="Отправить код на почту" func={() => SetCode(Math.floor(Math.random() * 9000) + 1000)}/>
                <ButtonText widthAuto={true} text="Подтвердить почту" func={handleConfirmation}/>
            </div>
        </section>
    )
}