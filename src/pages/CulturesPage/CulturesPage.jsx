import React from "react";
import Style from "./CulturesPage.module.css";
import {PagesCategorySkeleton} from "../PagesCategory/PagesCategorySkeleton";

export const CulturesPage = () => {
    return (
        <PagesCategorySkeleton HelloSection={{style: Style.HelloSection,h1: "Категория культурных мероприятий",
            h4: "Мероприятия, организованные при поддержке Департамента культуры города Москвы"}} />
    )
}