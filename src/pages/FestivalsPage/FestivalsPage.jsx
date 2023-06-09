import React, {memo} from "react";
import Style from "./FestivalsPage.module.css";
import {PagesCategorySkeleton} from "../PagesCategory/PagesCategorySkeleton";
import Photo1 from "../../image/festivals1.jpg";
import Photo2 from "../../image/festivals2.jpg";

const MemoizedPage = memo(PagesCategorySkeleton);
export const FestivalsPage = (props) => {
    return (
        <MemoizedPage
            HelloSection={{
                style: Style.ImageHelloSection, h1: "Фестивали и праздники"}}
            SectionOne={{
                h2: "Перечень Фестивалей и праздников, проводимых департаментом культуры города Москвы",
                Oneh5: "Перечень Фестивалей и праздников, проводимых в городе Москва - это список разнообразных мероприятий, " +
                    "которые проходят в столице России на протяжении всего года. Эти фестивали и праздники предназначены для того, " +
                    "чтобы предложить горожанам и гостям Москвы возможность отдохнуть, насладиться различными видами искусства, " +
                    "познакомиться с местными традициями и культурой.",
                Twoh5: "Среди праздников и фестивалей, которые можно увидеть в Москве, есть такие, как \"День города\", " +
                    "\"Московский международный кинофестиваль\", \"Московский международный фестиваль балета\", " +
                    "\"Московский Международный книжный фестиваль\" и многие другие. В зависимости от сезона и темы, " +
                    "фестивали могут быть посвящены кино, театру, музыке, науке, спорту и даже еде.",
                image1: Photo1,
                image2: Photo2}}
            SectionTwo={{h5: "Карта фестивалей и праздников, города Москвы"}}
            festivals={props.festivals}
        />
    )
}