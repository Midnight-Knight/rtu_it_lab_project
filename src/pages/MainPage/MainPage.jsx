import React, {memo} from "react";
import Style from "./MainPage.module.css";
import UnitedStyle from "./../PageStyle.module.css";
import classNames from "classnames";
import {MyMap} from "../../components/MyMap/MyMap";
import {Category} from "../../components/Cards/Cards";
import {ListBlock} from "../../components/ListBlock/ListBlock";

const MemoizedMyMap = memo(MyMap);
const MemoizedCategory = memo(Category);
const MemoizedListBlock = memo(ListBlock);
export const MainPage = (props) => {

    return (
        <section className={classNames(Style.MainPage,UnitedStyle.Page)}>
            <section>
                <h1>Веб Cайт актуальных мероприятий Москвы!</h1>
                <h4>
                    Этот веб-сайт позволяет находить актуальные мероприятия в Москве и обладает несколькими ключевыми функциями
                </h4>
            </section>
            <section>
                <h1>Категории</h1>
                <h4>Найдите то что вам интересно</h4>
                <MemoizedCategory/>
            </section>
            <section>
                <h1>Интерактивная карта мероприятий</h1>
                <h4>Карта со всеми категорий мероприятиями и информацией о них</h4>
                <MemoizedMyMap
                    festivals={props.festivals}
                    sport={props.sport}
                    exhibitions={props.exhibitions}
                    family={props.family}
                    citylife={props.citylife}
                    art={props.art}
                />
            </section>
            <section>
                <h1>Список мероприятий</h1>
                <h4>Список со всеми категорий мероприятиями в порядке их текущего статуса</h4>
                <MemoizedListBlock festivals={props.festivals}
                                   sport={props.sport}
                                   exhibitions={props.exhibitions}
                                   family={props.family}
                                   citylife={props.citylife}
                                   art={props.art}/>
            </section>
            <section>
                <h1>Прямые трансляции</h1>
                <h4>Подробная информацию о мероприятиях, а также прямые трансляции с места проведения мероприятий</h4>
                <div/>
            </section>
            <section>
                <h1>Личный кабинет и напоминания</h1>
                <h4>
                    Личный кабинет с системой автоматического напоминания по почте или SMS позволит вам не забыть о
                    приближающихся мероприятиях
                </h4>
                <div/>
            </section>
        </section>
    )
}