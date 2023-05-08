import React, {useEffect, useState} from "react";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import Style from "./MyMap.module.css";
import ImagePlacemarkRedActive from "./../../image/RedPlacemark.svg";
import ImagePlacemarkRed from "./../../image/PlacemarkBlack1.svg";
import ImagePlacemarkYellowActive from "./../../image/YellowPlacemark.svg";
import ImagePlacemarkYellow from "./../../image/PlacemarkBlack2.svg";
import ImagePlacemarkGreenActive from "./../../image/GreenPlacemark.svg";
import ImagePlacemarkGreen from "./../../image/PlacemarkBlack3.svg";
import ImagePlacemarkBlueActive from "./../../image/BluePlacemark.svg";
import ImagePlacemarkBlue from "./../../image/PlacemarkBlack4.svg";
import ImagePlacemarkPurpleActive from "./../../image/PurplePlacemark.svg";
import ImagePlacemarkPurple from "./../../image/PlacemarkBlack5.svg";

const PlacemarkRed = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [50, 50],
        iconImageHref: props.active === true ? ImagePlacemarkRedActive : ImagePlacemarkRed,
    }


    return (
        <Placemark onClick={props.func} options={placemarkOptions} geometry={props.coordinates}/>
    )
}

const PlacemarkYellow = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [50, 50],
        iconImageHref: props.active === true ? ImagePlacemarkYellowActive : ImagePlacemarkYellow,
    }

    return (
        <Placemark onClick={props.func} options={placemarkOptions} geometry={props.coordinates}/>
    )
}

const PlacemarkGreen = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [50, 50],
        iconImageHref: props.active === true ? ImagePlacemarkGreenActive : ImagePlacemarkGreen,
    }

    return (
        <Placemark onClick={props.func} options={placemarkOptions} geometry={props.coordinates}/>
    )
}

const PlacemarkBlue = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [50, 50],
        iconImageHref: props.active === true ? ImagePlacemarkBlueActive : ImagePlacemarkBlue,
    }

    return (
        <Placemark onClick={props.func} options={placemarkOptions} geometry={props.coordinates}/>
    )
}

const PlacemarkPurple = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [50, 50],
        iconImageHref: props.active === true ? ImagePlacemarkPurpleActive : ImagePlacemarkPurple,
    }

    return (
        <Placemark className={Style.RedAnimation} onClick={props.func} options={placemarkOptions} geometry={props.coordinates}/>
    )
}

export const MyMap = () => {
    const [MapPlacemark, SetMapPlacemark] = useState([<></>]);

    const handleClick = () => {
        alert("Placemark clicked");
    };

    const mapData = {
        center: [55.751432, 37.618883],
        zoom: 10,
        controls: ["zoomControl", "fullscreenControl"],
    };

    const mapOptions = {
        restrictMapArea: [
            [56.003477, 37.193216],
            [55.462172, 37.997975],
        ],
    };

    const Modules = {
        arrayModules: ["control.ZoomControl", "control.FullscreenControl"],
    }

    useEffect(() => {
        SetMapPlacemark([<PlacemarkRed key="1pl" active={true} func={handleClick} coordinates={[55.76, 37.64]}/>,
            <PlacemarkYellow key="2pl" active={true} func={handleClick} coordinates={[55.71, 37.64]}/>,
            <PlacemarkGreen key="3pl" active={true} func={handleClick} coordinates={[55.81, 37.64]}/>,
            <PlacemarkBlue key="4pl" active={true} func={handleClick} coordinates={[55.76, 37.54]}/>,
            <PlacemarkPurple key="5pl" active={true} func={handleClick} coordinates={[55.76, 37.74]}/>,
            <PlacemarkRed key="6pl" func={handleClick} coordinates={[55.76, 37.84]}/>,
            <PlacemarkYellow key="7pl" func={handleClick} coordinates={[55.71, 37.54]}/>,
            <PlacemarkGreen key="8pl" func={handleClick} coordinates={[55.71, 37.74]}/>,
            <PlacemarkBlue key="9pl" func={handleClick} coordinates={[55.81, 37.74]}/>,
            <PlacemarkPurple key="10pl" func={handleClick} coordinates={[55.81, 37.54]}/>]);
    }, [])


    return (
        <div className={Style.InteractiveMap}>
            <YMaps enterprise
                   query={{
                       apikey: "2d497516-211b-4791-9eb2-bc59d4ea43ee",
                   }}>
                <Map width={"100%"} height={"100%"} options={mapOptions} state={mapData} modules={Modules.arrayModules}>
                    {MapPlacemark.map(elem => {return elem})}
                </Map>
            </YMaps>
        </div>
    )
}
