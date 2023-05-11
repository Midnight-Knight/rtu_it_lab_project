import React, {memo} from "react";
import Style from "./PageEvents.module.css";
import UnitedStyle from "./../PageStyle.module.css";
import classNames from "classnames";

export const PageEvents = memo(({dataJSON}) => {
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
                <h3>Описание: <span>{data.DescriptionEvent}</span></h3>
            </section>
            <section>
                <h1>Мероприятие на карте</h1>
            </section>
            <section>
                <h1>Прямая траснляция мероприятия</h1>
            </section>
        </section>
    )
}
)