import React from "react";
import Style from "./Cards.module.css";
import photo1 from "../../image/photo1.png";
import photo2 from "../../image/photo2.png";
import photo3 from "../../image/photo3.png";
import Sport from "../../image/sport.png";
import building from "../../image/building.png";
import calendar from "../../image/calendary.png";

export const Category = () => {
    return (
        <div className={Style.GridDiv}>
            <div className={Style.GridCard}>
                <img alt="" src={photo1}/>
                <h4>Мероприятия, организованные при поддержке Департамента культуры города Москвы</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={photo2}/>
                <h4>Образовательных мероприятий Учебного центра Мосгосэкспертизы</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={photo3}/>
                <h4>Туристский событийный календарь города Москвы</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={Sport}/>
                <h4>Перечень спортивных мероприятий</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={building}/>
                <h4>Торжественные мероприятия в честь завершения строительства или реставрации общественных объектов</h4>
            </div>
            <div className={Style.GridCard}>
                <img alt="" src={calendar}/>
                <h4>Личный кабинет</h4>
            </div>
        </div>
    )
}