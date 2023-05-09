import React from "react";
import Style from "./Cards.module.css";
import Festivals from "./../../image/festivals.png";
import Sport from "./../../image/sport.png";
import Exhibitions from "./../../image/exhibitions.jpg";
import Art from "./../../image/art.jpg";
import Citylife from "./../../image/citylife.jpg"
import Family from "./../../image/family.jpg"
import FestivalsSvg from "./../../image/festivals_svg.svg";
import SportSVG from "./../../image/sport_svg.svg";
import ExhibitionsSVG from "./../../image/exhibitions_svg.svg";
import ArtSVG from "./../../image/art_svg.svg";
import CitylifeSVG from "./../../image/citylife_svg.svg";
import FamilySVG from "./../../image/family_svg.svg";

export const Category = () => {
    const linkPages = ["/festivals", "/sport", "/exhibitions", "/art", "/citylife", "/family"];

    return (
        <div className={Style.GridDiv}>
            <GridCard link={linkPages[0]} image={Festivals} imageSVG={FestivalsSvg} text={"Фестивали культуры и праздники города"}/>
            <GridCard link={linkPages[1]} image={Sport} imageSVG={SportSVG} text={"Спортивные события и соревнования города"}/>
            <GridCard link={linkPages[2]} image={Exhibitions} imageSVG={ExhibitionsSVG} text={"Профессиональные конференции и выставки города"}/>
            <GridCard link={linkPages[3]} image={Art} imageSVG={ArtSVG} text={"Художественные выставки и галереи города"}/>
            <GridCard link={linkPages[4]} image={Citylife} imageSVG={CitylifeSVG} text={"События и фестивали, отражающие культуру и историю города"}/>
            <GridCard link={linkPages[5]} image={Family} imageSVG={FamilySVG} text={"Детские развлечения и мероприятия города"}/>
        </div>
    )
}

const GridCard = (props) => {
    return (
        <a href={props.link} className={Style.GridCard}>
            <div>
                <img alt="" src={props.image}/>
                <div>
                    <img alt="" src={props.imageSVG}/>
                </div>
            </div>
            <h4>{props.text}</h4>
        </a>
    )
}