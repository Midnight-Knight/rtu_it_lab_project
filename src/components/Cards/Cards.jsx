import React from "react";
import Style from "./Cards.module.css";
import Festivals from "./../../image/festivals.png";
import Sport from "./../../image/sport.png";
import Exhibitions from "./../../image/exhibitions.jpg";
import Art from "./../../image/art.jpg";
import Citylife from "./../../image/citylife.jpg"
import Family from "./../../image/family.jpg"

export const Category = () => {
    return (
        <div className={Style.GridDiv}>
            <div className={Style.GridCard}>
                <img alt="" src={Festivals}/>
                <h4>Фестивали культуры и праздники города</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={Sport}/>
                <h4>Спортивные события и соревнования города</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={Exhibitions}/>
                <h4>Профессиональные конференции и выставки города</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={Art}/>
                <h4>Художественные выставки и галереи города</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={Citylife}/>
                <h4>События и фестивали, отражающие культуру и историю города</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={Family}/>
                <h4>Детские развлечения и мероприятия города</h4>
            </div>
        </div>
    )
}