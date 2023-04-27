import React from "react";
import Style from "./FirstSection.module.css";
import classNames from "classnames";
import Communism from "./../../image/communism_is_dead.jpg";
import Education from "./../../image/education.jpg";
import Park from "./../../image/park.jpg";
import Museum from "./../../image/golden_museum.jpg";

export const FirstSection = () => {
    return (
        <section className={Style.FirstSection}>
            <div></div>
            <div>
                <div className={Style.Grid}>
                    <div className={classNames(Style.GridCard)}></div>
                    <div className={classNames(Style.GridCard)}>
                        <img src={Museum} alt={"Мероприятия, организованные при поддержке Департамента культуры города Москвы"}/>
                    </div>
                    <div className={classNames(Style.GridCard)}>
                        <img src={Education} alt={"Образовательные мероприятия Учебного центра Мосгосэкспертизы"}/>
                    </div>
                    <div className={classNames(Style.GridCard)}>
                        <img src={Communism} alt={"Мероприятия по установке подъемных платформ для маломобильных групп населения в рамках реализации Государственной программы «Социальная поддержка жителей города Москвы»"}/>
                    </div>
                    <div className={classNames(Style.GridCard)}>
                        <img src={Park} alt={"Мероприятия по созданию и благоустройству парков и озелененных территорий"}/>
                    </div>
                    <div className={classNames(Style.GridCard)}></div>
                </div>
            </div>
        </section>
    )
}