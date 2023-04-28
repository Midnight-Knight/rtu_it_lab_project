import React, {useEffect, useState} from "react";
import Style from "./header.module.css";
import {ButtonLogo, ButtonLogoMobile, ButtonNav, ButtonText} from "../buttons/buttons";
import classNames from "classnames";

export const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [NavButtonClick, SetNavButtonClick] = useState(false);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    if (screenWidth <= 1045)
    {
        return (
            <>
                <header className={Style.HeaderMobile}>
                    <ButtonLogoMobile func={null}/>
                    <ButtonNav func={() => SetNavButtonClick(!NavButtonClick)}/>
                </header>
                <nav className={classNames(Style.Nav,NavButtonClick === false ? Style.NavFalseClick : Style.NavTrueClick)}>
                    <div>
                        <ButtonText text={"Культура"} func={null}/>
                        <ButtonText text={"Образование"} func={null}/>
                        <ButtonText text={"Доступная среда"} func={null}/>
                        <ButtonText text={"Благоустройство"} func={null}/>
                        <ButtonText text={"Кабинет"} func={null}/>
                    </div>
                </nav>
            </>
        )
    }
    else
    {
        return (
            <header className={Style.HeaderDesktop}>
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
}