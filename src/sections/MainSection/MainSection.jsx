import React from "react";
import Style from "./MainSection.module.css";
import {MyMap} from "../../components/MyMap/MyMap";
import {Category} from "../../components/Cards/Cards";

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
                <Category/>
            </div>
            <div>
                <h1>Интерактивная карта мероприятий</h1>
                <h4>Карта со всеми категорий мероприятиями и информацией о них.</h4>
                <MyMap/>
            </div>
            <div>
                <h1>Прямые трансляции</h1>
                <h4>Подробная информацию о мероприятиях, а также прямые трансляции с места проведения мероприятий.</h4>
                <div/>
            </div>
        </section>
    )
}