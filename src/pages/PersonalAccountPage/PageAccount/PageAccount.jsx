import React, {useState} from "react";
import Style from "./PageAccount.module.css";
import UnitedStyle from "./../../PageStyle.module.css";
import {checkAccount} from "../../../cookie";
import classNames from "classnames";
import {ButtonTextH4} from "../../../components/buttons/buttons";
import {ListBlock} from "../../../components/ListBlock/ListBlock";
import {MyMap} from "../../../components/MyMap/MyMap";

export const PageAccount = () => {
    const [Account] = useState(checkAccount());

    return (
        <section className={UnitedStyle.Page}>
            <section className={classNames(Style.Section,Style.HelloSection)}>
                <h1>Добро пожаловать в личный кабинет</h1>
            </section>
            <section className={classNames(Style.Section, Style.SectionSetting)}>
                <h1>Ваши настройки</h1>
                <div>
                    <h1>Уведомления</h1>
                    <div>
                        <h4>Уведомление на сайте</h4>
                        <ButtonTextH4 text="Недоступно"/>
                    </div>
                    <div>
                        <h4>Уведомление по почте</h4>
                        <ButtonTextH4 text="Включить"/>
                        <h4>Почта для уведомлений: {Account.login}</h4>
                    </div>
                    <div>
                        <h4>Уведомление по SMS</h4>
                        <ButtonTextH4 text="Недоступно"/>
                        <h4>Номер для уведомлений: Недоступно</h4>
                    </div>
                </div>
                <h4>Вы будете получать уведомления по электронной почте или SMS ежедневно точно в 12 часов дня, за день до начала мероприятия. А уведомления на сайте будут появляться каждый раз, когда вы посещаете его.</h4>
            </section>
            <section className={classNames(Style.Section, Style.SectionList)}>
                <h1>Список ваших мероприятий</h1>
                <ListBlock/>
            </section>
            <section className={classNames(Style.Section, Style.SectionMap)}>
                <h1>Карта ваших мероприятий</h1>
                <MyMap/>
            </section>
        </section>
    )
}