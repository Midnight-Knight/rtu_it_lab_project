import React from "react";
import Style from "./header.module.css";
import {ButtonLogo, ButtonText} from "../buttons/buttons";

export const Header = () => {
    return (
        <header className={Style.Header}>
            <ButtonLogo func={null}/>
            <nav>
                <ButtonText text={"Культура"} func={null}/>
                <ButtonText text={"Образование"} func={null}/>
                <ButtonText text={"Доступная среда"} func={null}/>
                <ButtonText text={"Благоустройство"} func={null}/>
                <ButtonText text={"Кабинет"} func={null}/>
            </nav>
        </header>
    )
}