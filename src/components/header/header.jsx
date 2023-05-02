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
    const [HeaderPositionY, SetHeaderPositionY] = useState(props.NoPages === true ? 1 : window.scrollY);
    const linkPages = ["/cultures", "/educations"];

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
                    <ButtonLogoMobile/>
                    <ButtonNavMenu func={() => SetNavButtonClick(!NavButtonClick)}/>
                </header>
                <nav className={classNames(Style.Nav,NavButtonClick === false ? Style.NavFalseClick : Style.NavTrueClick)}>
                    <ButtonNavH4 text={"Культура"} href={linkPages[0]}/>
                    <ButtonNavH4 text={"Образование"} href={linkPages[1]}/>
                    <ButtonNavH4 text={"Туризм"} href={null}/>
                    <ButtonNavH4 text={"Спорт"} href={null}/>
                    <ButtonNavH4 text={"Торжественные открытия"} href={null}/>
                    <ButtonNavH4 text={"Кабинет"} href={null}/>
                </nav>
            </>
        )
    }
    else
    {
        return (
            <header className={classNames(Style.HeaderDesktop,HeaderPositionY === 0 ? Style.HeaderBackgroundBlack : Style.HeaderBackgroundWhite)}>
                <ButtonLogo/>
                <nav>
                    <ButtonNav text={"Культура"} href={linkPages[0]}/>
                    <ButtonNav text={"Образование"} href={linkPages[1]}/>
                    <ButtonNav text={"Туризм"} href={null}/>
                    <ButtonNav text={"Спорт"} href={null}/>
                    <ButtonNav text={"Торжественные открытия"} href={null}/>
                    <ButtonNav text={"Кабинет"} href={null}/>
                </nav>
            </header>
        )
    }
}