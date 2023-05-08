import React, {useEffect, useState} from "react";
import Style from "./header.module.css";
import {ButtonLogo, ButtonNavMenu, ButtonNav, ButtonAccount} from "../buttons/buttons";
import classNames from "classnames";

export const Header = (props) => {
    const [NavButtonClick, SetNavButtonClick] = useState(false);
    const [HeaderPositionY, SetHeaderPositionY] = useState(props.NoPages === true ? 51 : window.scrollY);
    const linkPages = ["/festivals", "/sport", "/exhibitions", "/art", "/citylife", "/family"];

    const PositionY = () => {
      SetHeaderPositionY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', PositionY);
        return () => {
            window.removeEventListener('scroll', PositionY);
        };
    }, []);



    return (
        <>
            <header className={classNames(Style.Header,NavButtonClick === true ? Style.HeaderBackgroundDark : (HeaderPositionY <= 50 ? Style.HeaderBackgroundBlack : Style.HeaderBackgroundWhite))}>
                <ButtonLogo/>
                <div>
                    <ButtonNavMenu func={() => SetNavButtonClick(!NavButtonClick)}/>
                    <ButtonAccount/>
                </div>
            </header>
            <nav className={classNames(Style.Nav,NavButtonClick === false ? Style.NavFalseClick : Style.NavTrueClick)}>
                <ButtonNav text={"Фестивали и праздники"} href={linkPages[0]}/>
                <ButtonNav text={"Спорт"} href={linkPages[1]}/>
                <ButtonNav text={"Профессиональные выставки и форумы"} href={linkPages[2]}/>
                <ButtonNav text={"Художественные выставки"} href={linkPages[3]}/>
                <ButtonNav text={"Столичная жизнь"} href={linkPages[4]}/>
                <ButtonNav text={"Отдых с детьми"} href={linkPages[5]}/>
            </nav>
        </>
    )

}