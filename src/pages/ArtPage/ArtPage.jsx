import React from "react";
import Style from "./ArtPage.module.css";
import {PagesCategorySkeleton} from "../PagesCategory/PagesCategorySkeleton";
import Photo1 from "../../image/art1.jpg";
import Photo2 from "../../image/art2.jpg";

export const ArtPage = () => {
    return (
        <PagesCategorySkeleton
            HelloSection={{
                style: Style.ImageHelloSection, h1: "Художественные выставки"}}
            SectionOne={{
                h2: "Перечень художественных выставок, проводимых в Москве",
                Oneh5: "\"Художественные выставки\" - это категория мероприятий, которая представляет уникальную возможность ознакомиться с произведениями искусства, " +
                    "созданными как мастерами прошлого, так и современными художниками. В рамках этой категории можно найти самые разнообразные выставки: от классических " +
                    "картин до современного искусства, от мировых музейных коллекций до работ локальных художников. Посещение художественных выставок - это не только " +
                    "возможность насладиться красотой произведений искусства, но и расширить свой кругозор, узнать новые направления и тенденции в искусстве, погрузиться " +
                    "в атмосферу творчества и вдохновения. Здесь можно увидеть произведения известных художников, познакомиться с их творческой биографией и вдохновиться " +
                    "их работами.",
                Twoh5: "Каждая художественная выставка - это уникальное событие, которое проводится с учетом всех требований безопасности и комфорта посетителей. " +
                    "Выставки организуются на самом высоком уровне, с использованием современных технологий и подходов, чтобы каждый гость смог насладиться произведениями " +
                    "искусства в полной мере. \"Художественные выставки\" - это не только место для любителей искусства, но и возможность для каждого узнать что-то " +
                    "новое, обогатить свой внутренний мир и получить удовольствие от прекрасного. Благодаря этим выставкам каждый может раскрыть в себе художника и " +
                    "почувствовать связь с миром искусства.",
                image1: Photo1,
                image2: Photo2}}
            SectionTwo={{h5: "Карта художественных выставок"}}
        />
    )
}