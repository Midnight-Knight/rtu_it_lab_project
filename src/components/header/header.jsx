import React, {useEffect, useState} from "react";
import Style from "./header.module.css";
import {ButtonLogo, ButtonLogoMobile, ButtonNav, ButtonText, ButtonTextH4} from "../buttons/buttons";
import classNames from "classnames";

export const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [NavButtonClick, SetNavButtonClick] = useState(false);
    const [HeaderPositionY, SetHeaderPositionY] = useState(window.scrollY);

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
                <header className={classNames(Style.HeaderMobile,NavButtonClick === true ? Style.HeaderBackgroundDark : (HeaderPositionY === 0 ? Style.HeaderBackgroundBlack : Style.HeaderBackgroundWhite))}>
                    <ButtonLogoMobile func={null}/>
                    <ButtonNav func={() => SetNavButtonClick(!NavButtonClick)}/>
                </header>
                <nav className={classNames(Style.Nav,NavButtonClick === false ? Style.NavFalseClick : Style.NavTrueClick)}>
                    <ButtonTextH4 text={"Культура"} func={null}/>
                    <ButtonTextH4 text={"Образование"} func={null}/>
                    <ButtonTextH4 text={"Туризм"} func={null}/>
                    <ButtonTextH4 text={"Спорт"} func={null}/>
                    <ButtonTextH4 text={"Торжественные открытия"} func={null}/>
                    <ButtonTextH4 text={"Кабинет"} func={null}/>
                </nav>
            </>
        )
    }
    else
    {
        return (
            <header className={classNames(Style.HeaderDesktop,HeaderPositionY === 0 ? Style.HeaderBackgroundBlack : Style.HeaderBackgroundWhite)}>
                <ButtonLogo func={null}/>
                <nav>
                    <ButtonText text={"Культура"} func={null}/>
                    <ButtonText text={"Образование"} func={null}/>
                    <ButtonText text={"Туризм"} func={null}/>
                    <ButtonText text={"Спорт"} func={null}/>
                    <ButtonText text={"Торжественные открытия"} func={null}/>
                    <ButtonText text={"Кабинет"} func={null}/>
                </nav>
            </header>
        )
    }
}