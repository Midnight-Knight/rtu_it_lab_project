import React, {memo, useEffect} from "react";
import Style from "./PageEvents.module.css";
import UnitedStyle from "./../PageStyle.module.css";
import classNames from "classnames";
import {MyMap} from "../../components/MyMap/MyMap";
import {useLocation} from "react-router";
import {ButtonTextH4} from "../../components/buttons/buttons";

const MemoizedMap = memo(MyMap);

export const PageEvents = memo(({dataJSON, account}) => {
        const location = useLocation();

        useEffect(() => {
            // Получение хеша из URL-адреса
            const hash = location.hash;

            // Проверка, что хеш не пустой
            if (hash) {
                // Поиск элемента с указанным ID, соответствующим хешу
                const targetElement = document.querySelector(hash);

                // Проверка, что элемент найден
                if (targetElement) {
                    // Выполнение прокрутки к элементу
                    targetElement.scrollIntoView();
                }
            }
        }, [location]);
    const data = dataJSON;

    return (
        <section className={classNames(UnitedStyle.Page, Style.PageEvent)}>
            <section>
                <h1 className={Style.MarginB}>{data.Name}</h1>
                <h3 className={Style.MarginS}>Тип мероприятия: <span>{data.TypeEvent}</span></h3>
                <h3 className={Style.MarginB}>Организатор: <span>{data.ResponsibleEvent}</span></h3>
                <h3 className={Style.MarginS}>Статус мероприятия: <span>{data.Status === 0 ? "В ожидание начала" : (data.Status === 1 ? "В процессе" : "Завершено")}</span></h3>
                <h3 className={Style.MarginB}>Дата проведения: <span>{data.Date}</span></h3>
                <h3 className={Style.MarginS}>Административный округ: <span>{data.AdmArea}</span></h3>
                <h3 className={Style.MarginS}>Район: <span>{data.District}</span></h3>
                <h3 className={Style.MarginS}>Адрес: <span>{data.Address}</span></h3>
                <h3 className={Style.MarginB}>Локация: <span>{data.Location}</span></h3>
                <h3 className={Style.MarginB}>Описание: <span>{data.DescriptionEvent}</span></h3>
                {account === undefined ? <></> : <ButtonTextH4 text={"Добавить в мои мероприятия"}/>}
            </section>
            <section>
                <h1>Мероприятие на карте</h1>
                {
                    data.TypeEvent === 'Художественные выставки' ? <MemoizedMap art={[data]} coordinates={data.coordinates}/> :
                        data.TypeEvent === 'Столичная жизн' ? <MemoizedMap citylife={[data]} coordinates={data.coordinates}/> :
                            data.TypeEvent === 'Профессиональные выставки и форумы' ? <MemoizedMap exhibitions={[data]} coordinates={data.coordinates}/> :
                                data.TypeEvent === 'Отдых с детьми' ? <MemoizedMap family={[data]} coordinates={data.coordinates}/> :
                                    data.TypeEvent === 'Спорт' ? <MemoizedMap sport={[data]} coordinates={data.coordinates}/> :
                                        <MemoizedMap festivals={[data]} coordinates={data.coordinates}/>
                }
            </section>
            <section id="stream">
                <h1>Прямая траснляция мероприятия</h1>
                {
                    data.stream === false ? <div className={Style.BlockStream}><h1>Трансляция ещё не началась</h1></div> : <iframe className={Style.BlockStream} src={data.stream}
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                             allowFullScreen></iframe>
                }
            </section>
        </section>
    )
}
)