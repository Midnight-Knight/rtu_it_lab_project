import React from "react";
import Style from "./FamilyPage.module.css";
import {PagesCategorySkeleton} from "../PagesCategory/PagesCategorySkeleton";
import Photo1 from "../../image/family1.jpg";
import Photo2 from "../../image/family2.jpg";

export const FamilyPage = () => {
    return (
        <PagesCategorySkeleton
            HelloSection={{
                style: Style.ImageHelloSection, h1: "Отдых с детьми"}}
            SectionOne={{
                h2: "Перечень мероприятий \"Отдых с детьми\", проводимых Департаментом культуры города Москвы",
                Oneh5: "\"Отдых с детьми\" - это категория мероприятий, которая представляет собой уникальную возможность провести время с семьей и детьми, наслаждаясь " +
                    "всевозможными развлечениями и активными играми. В рамках этой категории мероприятий вы можете найти множество интересных предложений, начиная от " +
                    "пикников на свежем воздухе до походов в кино, театры, музеи и зоопарки. Здесь можно найти мероприятия для детей разных возрастов, которые помогут " +
                    "развить творческий потенциал, физическую активность и социальные навыки.",
                Twoh5: "Каждое мероприятие \"Отдых с детьми\" организуется с учетом всех требований безопасности и комфорта для детей и их родителей. Все активности " +
                    "проводятся опытными и квалифицированными педагогами и волонтерами, которые обеспечивают веселое и познавательное времяпрепровождение для детей. " +
                    "Эта категория мероприятий позволяет родителям и детям укрепить свои семейные отношения, провести время вместе и создать незабываемые воспоминания. " +
                    "Отдых с детьми - это не только возможность отдохнуть от повседневной рутины, но и насладиться взаимодействием с детьми, увидеть мир глазами маленьких " +
                    "человечков и получить массу положительных эмоций.",
                image1: Photo1,
                image2: Photo2}}
            SectionTwo={{h5: "Карта мероприятий \"Отдых с детьми\""}}
        />
    )
}