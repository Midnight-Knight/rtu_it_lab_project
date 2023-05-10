import React, {memo} from "react";
import Style from "./PageEvents.module.css";
import UnitedStyle from "./../PageStyle.module.css";

export const PageEvents = memo(({dataJSON}) => {
    const data = dataJSON;

    return (
        <section className={UnitedStyle.Page}>
            <section>
                <h1>{data.Name}</h1>
                <h3>Статус мероприятия: {data.Status === 0 ? "В ожидание начала" : (data.Status === 1 ? "В процессе" : "Завершено")}</h3>
                <h3>Тип мероприятия: {data.TypeEvent}</h3>
                <h3>Организатор: {data.ResponsibleEvent}</h3>
                <h3>Административный округ: {data.AdmArea}</h3>
                <h3>Район: {data.District}</h3>
                <h3>Адрес: {data.Address}</h3>
                <h3>Дата проведения: {data.Date}</h3>
                <h3>Локация: {data.Location}</h3>
                <div>
                    <h3>Описание: </h3>
                    <h3>{data.DescriptionEvent}</h3>
                </div>
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