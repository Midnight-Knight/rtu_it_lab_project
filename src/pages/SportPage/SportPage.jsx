import React from "react";
import Style from "./SportPage.module.css";
import {PagesCategorySkeleton} from "../PagesCategory/PagesCategorySkeleton";
import Photo1 from "../../image/sport1.jpg";
import Photo2 from "../../image/sport2.jpg";

export const SportPage = (props) => {
    return (
        <PagesCategorySkeleton
            HelloSection={{
                style: Style.ImageHelloSection, h1: "Спортивные мероприятия"}}
            SectionOne={{
                h2: "Перечень спортивных мероприятий, проводимых Департаментом спорта города Москвы",
                Oneh5: "Перечень спортивных мероприятий, включает в себя различные " +
                    "мероприятия, которые являются настоящей находкой для любителей спорта, желающих получить удовольствие от зрелищных " +
                    "состязаний. Этот перечень включает в себя множество событий разного уровня: от масштабных международных соревнований, " +
                    "таких как Чемпионат мира по футболу, Чемпионат мира по легкой атлетике, до местных соревнований по хоккею, футболу, " +
                    "баскетболу, теннису и другим видам спорта.",
                Twoh5: "Также перечень спортивных мероприятий, проводимых Департаментом спорта города Москвы, включает в себя " +
                    "различные мероприятия, организуемые для жителей Москвы, желающих заниматься спортом, улучшать " +
                    "свое здоровье и поддерживать активный образ жизни. Этот перечень включает в себя множество событий " +
                    "разного уровня: от городских соревнований по теннису, футболу, волейболу, баскетболу до больших " +
                    "спортивных событий, таких как \"Московский марафон\", \"Ледовый фестиваль\" и другие.",
                image1: Photo1,
                image2: Photo2}}
            SectionTwo={{h5: "Карта спортивных мероприятий, города Москвы"}}
            sport={props.sport}
        />
    )
}
