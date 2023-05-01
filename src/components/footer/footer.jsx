import React from "react";
import Style from "./footer.module.css";

export const Footer = () => {
    return(
        <footer className={Style.Footer}>
            <div>
                <h1>О сайте</h1>
                <h5>Web-сервис разработал Деев Леонид Русланович.</h5>
                <h5>
                    Студент 2 курса, РТУ МИРЭА, Факультет: ИИТ, Направление: Программная инженерия, Профиль: Разработка и дизайн
                    компьютерных игр и мультимедийных приложений.
                </h5>
                <h5>GitHub: <a target="_blank" href="https://github.com/Midnight-Knight">https://github.com/Midnight-Knight</a></h5>
            </div>
            <div>
                <h5>
                    Сервис использует изменённые наборы данных с Портала открытых данных, от Правительства Москвы,
                    согласно условиям портала.
                </h5>
                <h5>
                    Наборы данных взятые с Портала открытых данных являются изменёнными и не соответствуют действительной информации.
                </h5>
                <h5>
                    Данные изменены в целях реализации творческого проекта - данного Web-сервиса.
                </h5>
            </div>
            <div>
                <h5>
                    Сервис использует JavaScript API v2.1 Навигационных карт от компании Яндекс.
                </h5>
                <h5>
                    Сервис собирает данные только в случае регистрации аккаунта и это следующие данные: данные аккаунта, номер телефона,
                    почты и выбранных вами лично мероприятий для демонстрации функционала оповещения. Данные в других целях не используются
                    и не передаются 3 лицам.
                </h5>
            </div>
        </footer>
    )
}