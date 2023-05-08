import React, {useEffect, useState} from "react";
import Style from "./header.module.css";
import {
    ButtonLogo,
    ButtonLogoMobile,
    ButtonNavMenu,
    ButtonNav,
    ButtonNavH4
} from "../buttons/buttons";
import classNames from "classnames";

export const Header = (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [NavButtonClick, SetNavButtonClick] = useState(false);
    const [HeaderPositionY, SetHeaderPositionY] = useState(props.NoPages === true ? 51 : window.scrollY);
    const linkPages = ["/festivals", "/sport", "/exhibitions", "/art", "/citylife", "/family"];

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    const PositionY = () => {
      SetHeaderPositionY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', PositionY);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', PositionY);
        };
    }, []);



    if (screenWidth < 1024)
    {
        return (
            <>
                <header className={classNames(Style.HeaderMobile,NavButtonClick === true ? Style.HeaderBackgroundDark : (HeaderPositionY <= 50 ? Style.HeaderBackgroundBlack : Style.HeaderBackgroundWhite))}>
                    <ButtonLogoMobile/>
                    <ButtonNavMenu func={() => SetNavButtonClick(!NavButtonClick)}/>
                </header>
                <nav className={classNames(Style.Nav,NavButtonClick === false ? Style.NavFalseClick : Style.NavTrueClick)}>
                    <ButtonNavH4 text={"Фестивали и праздники"} href={linkPages[0]}/>
                    <ButtonNavH4 text={"Спорт"} href={linkPages[1]}/>
                    <ButtonNavH4 text={"Профессиональные выставки и форумы"} href={linkPages[2]}/>
                    <ButtonNavH4 text={"Художественные выставки"} href={linkPages[3]}/>
                    <ButtonNavH4 text={"Столичная жизнь"} href={linkPages[4]}/>
                    <ButtonNavH4 text={"Отдых с детьми"} href={linkPages[5]}/>
                    <ButtonNavH4 text={"Кабинет"} href={null}/>
                </nav>
            </>
        )
    }
    else
    {
        return (
            <header className={classNames(Style.HeaderDesktop,HeaderPositionY <= 50 ? Style.HeaderBackgroundBlack : Style.HeaderBackgroundWhite)}>
                <ButtonLogo/>
                <nav>
                    <ButtonNav text={"Фестивали"} href={linkPages[0]}/>
                    <ButtonNav text={"Спорт"} href={linkPages[1]}/>
                    <ButtonNav text={"Выставки"} href={linkPages[2]}/>
                    <ButtonNav text={"Художественные выставки"} href={linkPages[3]}/>
                    <ButtonNav text={"Столичная жизнь"} href={linkPages[4]}/>
                    <ButtonNav text={"Отдых с детьми"} href={linkPages[5]}/>
                    <ButtonNav text={"Кабинет"} href={null}/>
                </nav>
            </header>
        )
    }
}