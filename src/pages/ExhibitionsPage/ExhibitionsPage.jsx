import React from "react";
import Style from "./ExhibitionsPage.module.css";
import {PagesCategorySkeleton} from "../PagesCategory/PagesCategorySkeleton";
import PhotoSport1 from "../../image/exhibitions1.png";
import PhotoSport2 from "../../image/exhibitions2.jpg";

export const ExhibitionsPage = () => {
    return (
        <PagesCategorySkeleton
            HelloSection={{
                style: Style.ImageHelloSection, h1: "Категория спорта",}}
            SectionOne={{
                h2: "Перечень спортивных мероприятий, проводимых Департаментом спорта города Москвы",
                Oneh5: "«Перечень спортивных мероприятий» содержит подробную информацию о сроках и местах проведения значимых массовых " +
                    "спортивно-зрелищных мероприятий города Москвы. Эта страница позволяет получить подробную информацию о мероприятиях " +
                    "города Москвы, посмотреть: наименование мероприятия, сроки и место проведения, количество участников, виды спорта и " +
                    "дисциплины, возрастную категорию.",
                Twoh5: "Соревнования проводятся на спортивных объектах города Москвы или специальных выделенных городских зонах, проводит " +
                    "соревнования судейская коллегия, в состав которой входят: главный судья, заместители главного судьи, главный секретарь, " +
                    "заместители главного секретаря, судьи-диспетчеры, судьи-секретари, ведущие судьи, судьи-ассистенты, врач. " +
                    "А также к проведению соревнований привлекаются волонтеры.",
                image1: PhotoSport1,
                image2: PhotoSport2}}
            SectionTwo={{h5: "Карта спортивных мероприятий, города Москвы"}}
        />
    )
}