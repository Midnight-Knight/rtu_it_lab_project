import React, {useEffect, useState} from "react";
import Style from "./header.module.css";
import {ButtonLogo, ButtonNavMenu, ButtonNav} from "../buttons/buttons";
import classNames from "classnames";
import FestivalsSvg from "./../../image/festivals_svg.svg";
import SportSVG from "./../../image/sport_svg.svg";
import ExhibitionsSVG from "./../../image/exhibitions_svg.svg";
import ArtSVG from "./../../image/art_svg.svg";
import CitylifeSVG from "./../../image/citylife_svg.svg";
import FamilySVG from "./../../image/family_svg.svg";
export const Header = (props) => {

    const [NavButtonClick, SetNavButtonClick] = useState(false);
    const [HeaderPositionY, SetHeaderPositionY] = useState(props.Animation === false ? 51 : window.scrollY);
    const linkPages = ["/festivals", "/sport", "/exhibitions", "/art", "/citylife", "/family"];

    const PositionY = () => {
      SetHeaderPositionY(window.scrollY);
    };

    useEffect(() => {
        if (props.Animation !== false) {
            window.addEventListener('scroll', PositionY);
            return () => {
                window.removeEventListener('scroll', PositionY);
            };
        }
        // eslint-disable-next-line
    }, []);



    return (
        <>
            <header className={classNames(Style.Header,NavButtonClick === true ? Style.HeaderBackgroundDark : (HeaderPositionY <= 50 ? Style.HeaderBackgroundBlack : Style.HeaderBackgroundWhite))}>
                <ButtonLogo/>
                <div>
                    <ButtonNavMenu func={() => SetNavButtonClick(!NavButtonClick)}/>
                </div>
            </header>
            <nav className={classNames(Style.Nav,NavButtonClick === false ? Style.NavFalseClick : Style.NavTrueClick)}>
                <ButtonNav image={FestivalsSvg} text={"Фестивали и праздники"} href={linkPages[0]}/>
                <ButtonNav image={SportSVG} text={"Спорт"} href={linkPages[1]}/>
                <ButtonNav image={ExhibitionsSVG} text={"Профессиональные выставки и форумы"} href={linkPages[2]}/>
                <ButtonNav image={ArtSVG} text={"Художественные выставки"} href={linkPages[3]}/>
                <ButtonNav image={CitylifeSVG} text={"Столичная жизнь"} href={linkPages[4]}/>
                <ButtonNav image={FamilySVG} text={"Отдых с детьми"} href={linkPages[5]}/>
            </nav>
        </>
    )

}