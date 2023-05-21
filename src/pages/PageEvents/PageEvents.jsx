import React, {memo, useEffect, useMemo, useState} from "react";
import Style from "./PageEvents.module.css";
import UnitedStyle from "./../PageStyle.module.css";
import classNames from "classnames";
import {MyMap} from "../../components/MyMap/MyMap";
import {useLocation} from "react-router";
import {InputBlack} from "../../components/input/input";
import {ButtonTextH4} from "../../components/buttons/buttons";
import axios from "axios";

const MemoizedMap = memo(MyMap);

export const PageEvents = memo(({dataJSON}) => {
    const [ValueEmail, SetValueEmail] = useState("");
    const [TextEmail, SetTextEmail] = useState("Ожидание ввода почты");

    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView();
            }
        }
    }, [location]);
    const data = dataJSON;

    const myImage=useMemo(() => ({
        backgroundImage: `url(${data.image})`
    }),[data.image])
        const handleCode = async (email) => {
            try
            {
                const response = await axios.post("http://localhost:2999/message",
                    {email: email,
                        title: "Уведомление о начале мероприятия",
                        message: "Вы подключили авто отслеживание начала мероприятия \""+data.Name+"\". \nСсылка на мероприятие: http://localhost:3000/"+data.ID+"\nВнимание, функция авто отслеживания мероприятия в данный момент не реализована на сервере, это единственное сообщение которое вы получите по данному мероприятию."});
                const dataAPI = await response.data;
                if (dataAPI.response === true)
                {
                    SetTextEmail("Уведомление подключено");
                }
                else
                {
                    SetTextEmail(dataAPI.response);
                }
            }
            catch (e)
            {
                console.error(e);
                SetTextEmail("Ошибка соединения с сервером");
            }
        };

    return (
        <section className={classNames(UnitedStyle.Page, Style.PageEvent)}>
            <section style={myImage}>
                <h1 className={Style.MarginB}>{data.Name}</h1>
            </section>
            <section>
                <h1 className={Style.MarginB}>Мероприятие: {data.Name}</h1>
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
                    data.stream === false ? <div className={Style.BlockStream}><h1>Трансляция ещё не началась</h1></div> :
                        <iframe className={Style.BlockStream} src={data.stream}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                }
            </section>
            {
                (data.Status === 0) ?
            <section>
                <h1>Уведомления о начале мероприятия</h1>
                <h4>Вы будете получать уведомления по электронной почте ежедневно точно в 12 часов дня, за день и за неделю до начала мероприятия.</h4>
                <div>
                    <div>
                        <h3>Уведомление по почте</h3>
                        <h4>Email</h4>
                        <InputBlack type={"email"} value={ValueEmail} funcValue={(e) => SetValueEmail(e.target.value)} closeValue={() => SetValueEmail("")}/>
                        <h4>Статус: {TextEmail}</h4>
                        <ButtonTextH4 text="Подключить" func={() => handleCode(ValueEmail)}/>
                    </div>
                </div>
            </section> : <></>
            }
        </section>
    )
}
)