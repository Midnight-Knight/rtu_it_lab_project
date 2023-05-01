import React from "react";
import Style from "./MainSection.module.css";
//import classNames from "classnames";
import photo1 from "./../../image/photo1.png";
import photo2 from "./../../image/photo2.png";
import photo3 from "./../../image/photo3.png";
import Sport from "./../../image/sport.png";
import calendar from "./../../image/calendary.png";
import building from "./../../image/building.png";
import {MyMap} from "../../components/MyMap/MyMap";

export const MainSection = () => {


    return (
        <section className={Style.FirstSection}>
            <div>
                <h1>Веб Cайт актуальных мероприятий Москвы!</h1>
                <h4>
                    Этот веб-сайт позволяет находить актуальные мероприятия в Москве и обладает несколькими ключевыми функциями.
                </h4>
            </div>
            <div>
                <h1>Категории</h1>
                <h4>Найдите то что вам интересно или посмотрите сохранённое в личном кабинете.</h4>
                <div className={Style.GridDiv}>
                    <div className={Style.GridCard}>
                        <img src={photo1}/>
                        <h4>Мероприятия, организованные при поддержке Департамента культуры города Москвы</h4>
                    </div>
                    <div className={Style.GridCard}>
                        <img src={photo2}/>
                        <h4>Образовательных мероприятий Учебного центра Мосгосэкспертизы</h4>
                    </div>
                    <div className={Style.GridCard}>
                        <img src={photo3}/>
                        <h4>Туристский событийный календарь города Москвы</h4>
                    </div>
                    <div className={Style.GridCard}>
                        <img src={Sport}/>
                        <h4>Перечень спортивных мероприятий</h4>
                    </div>
                    <div className={Style.GridCard}>
                        <img src={building}/>
                        <h4>Торжественные мероприятия в честь завершения строительства или реставрации общественных объектов</h4>
                    </div>
                    <div className={Style.GridCard}>
                        <img src={calendar}/>
                        <h4>Личный кабинет</h4>
                    </div>
                </div>
            </div>
            <div>
                <h1>Интерактивная карта мероприятий</h1>
                <MyMap/>
            </div>
        </section>
    )
}