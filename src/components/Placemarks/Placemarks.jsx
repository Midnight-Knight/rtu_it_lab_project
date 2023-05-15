import React from "react";
import {Placemark} from "@pbe/react-yandex-maps";
import PlacemarkArtBlack from "./../../image/PlacemarkArtBlack.svg";
import PlacemarkArtColor from "./../../image/PlacemarkArtColor.svg";
import PlacemarkFamilyBlack from "./../../image/PlacemarkFamilyBlack.svg";
import PlacemarkFamilyColor from "./../../image/PlacemarkFamilyColor.svg";
import PlacemarkSportBlack from "./../../image/PlacemarkSportBlack.svg";
import PlacemarkSportColor from "./../../image/PlacemarkSportColor.svg";
import PlacemarkExhibitionsBlack from "./../../image/PlacemarkExhibitionsBlack.svg";
import PlacemarkExhibitionsColor from "./../../image/PlacemarkExhibitionsColor.svg";
import PlacemarkFestivalsBlack from "./../../image/PlacemarkFestivalsBlack.svg";
import PlacemarkFestivalsColor from "./../../image/PlacemarkFestivalsColor.svg";
import PlacemarkCitylifeBlack from "./../../image/PlacemarkCitylifeBlack.svg";
import PlacemarkCitylifeColor from "./../../image/PlacemarkCitylifeColor.svg";

const PlacemarkOptionsDefault = {
    iconLayout: "default#image",
    iconImageSize: [32, 48],
}

const ActivePlacemark = (SvgStandard, SvgActive, Active) =>
{
    switch (Active === true)
    {
        case true:
            return {iconImageHref: SvgActive};
        default:
            return {iconImageHref: SvgStandard};
    }
}

const PlacemarkCategory = (category, active) => {
    switch (category)
    {
        case "Художественные выставки":
            return ActivePlacemark(PlacemarkArtBlack, PlacemarkArtColor, active);
        case "Столичная жизнь":
            return ActivePlacemark(PlacemarkCitylifeBlack, PlacemarkCitylifeColor, active);
        case "Профессиональные выставки и форумы":
            return ActivePlacemark(PlacemarkExhibitionsBlack, PlacemarkExhibitionsColor, active);
        case "Отдых с детьми":
            return ActivePlacemark(PlacemarkFamilyBlack, PlacemarkFamilyColor, active);
        case "Спорт":
            return ActivePlacemark(PlacemarkSportBlack, PlacemarkSportColor, active);
        case "Фестивали и праздники": default:
            return ActivePlacemark(PlacemarkFestivalsBlack, PlacemarkFestivalsColor, active);
    }
}

export const MyPlacemark = (props) => {

    const placemarkOptions = PlacemarkCategory(props.balloon.category, props.active);

    return (
        <Placemark
            options={Object.assign({},PlacemarkOptionsDefault, placemarkOptions)}
            geometry={props.coordinates}
            onClick={props.balloon.func}
            openBalloon={props.balloon.balloonOpen}
            onClose={props.balloon.balloonClose}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            properties={{
                balloonContentHeader: `<h6>${props.balloon.title}</h6>`,
                balloonContentBody: `<p>${props.balloon.address}</p><p>${props.balloon.date}</p>`,
                balloonContentFooter: props.active === true ? `<p>${props.balloon.category}</p><a href=${props.balloon.link}>Перейти на страницу</a><br/><a href=${props.balloon.link+"#stream"}>Посмотреть трансляцию</a>` :
                `<p>${props.balloon.category}</p><a href=${props.balloon.link}>Перейти на страницу</a>`,
                hintContent: props.balloon.title,
            }}
            state={{
                balloonLayout: "default#imageWithContent",
                balloonPanelMaxMapArea: 0,
                balloonCloseButton: true,
                balloonAutoPan: true,
                balloonShadow: true,
            }}
        />
    )
}