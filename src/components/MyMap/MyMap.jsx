import React, {useEffect, useState} from "react";
import {
    Clusterer,
    FullscreenControl,
    GeolocationControl,
    Map,
    Placemark,
    YMaps,
    ZoomControl
} from "@pbe/react-yandex-maps";
import Style from "./MyMap.module.css";
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

const PlacemarkArt = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [32, 48],
        iconImageHref: props.active === true ? PlacemarkArtColor : PlacemarkArtBlack,
    }


    return (
        <Placemark
            options={placemarkOptions}
            geometry={props.coordinates}
            onClick={props.balloon.func}
            openBalloon={props.balloon.balloonOpen}
            onClose={props.balloon.balloonClose}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            properties={{
                balloonContentHeader: `<a href=${props.balloon.link}><h6>${props.balloon.title}</h6></a>`,
                balloonContentBody: `<p>${props.balloon.address}</p><p>${props.balloon.date}</p>`,
                balloonContentFooter: props.balloon.category,
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

const PlacemarkFamily = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [32, 48],
        iconImageHref: props.active === true ? PlacemarkFamilyColor : PlacemarkFamilyBlack,
    }

    return (
        <Placemark
            options={placemarkOptions}
            geometry={props.coordinates}
            onClick={props.balloon.func}
            openBalloon={props.balloon.balloonOpen}
            onClose={props.balloon.balloonClose}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            properties={{
                balloonContentHeader: `<a href=${props.balloon.link}><h6>${props.balloon.title}</h6></a>`,
                balloonContentBody: `<p>${props.balloon.address}</p><p>${props.balloon.date}</p>`,
                balloonContentFooter: props.balloon.category,
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

const PlacemarkSport = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [32, 48],
        iconImageHref: props.active === true ? PlacemarkSportColor : PlacemarkSportBlack,
    }

    return (
        <Placemark
            options={placemarkOptions}
            geometry={props.coordinates}
            onClick={props.balloon.func}
            openBalloon={props.balloon.balloonOpen}
            onClose={props.balloon.balloonClose}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            properties={{
                balloonContentHeader: `<a href=${props.balloon.link}><h6>${props.balloon.title}</h6></a>`,
                balloonContentBody: `<p>${props.balloon.address}</p><p>${props.balloon.date}</p>`,
                balloonContentFooter: props.balloon.category,
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

const PlacemarkExhibitions = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [32, 48],
        iconImageHref: props.active === true ? PlacemarkExhibitionsColor : PlacemarkExhibitionsBlack,
    }

    return (
        <Placemark
            options={placemarkOptions}
            geometry={props.coordinates}
            onClick={props.balloon.func}
            openBalloon={props.balloon.balloonOpen}
            onClose={props.balloon.balloonClose}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            properties={{
                balloonContentHeader: `<a href=${props.balloon.link}><h6>${props.balloon.title}</h6></a>`,
                balloonContentBody: `<p>${props.balloon.address}</p><p>${props.balloon.date}</p>`,
                balloonContentFooter: props.balloon.category,
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

const PlacemarkFestivals = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [32, 48],
        iconImageHref: props.active === true ? PlacemarkFestivalsColor : PlacemarkFestivalsBlack,
    }

    return (
        <Placemark
            options={placemarkOptions}
            geometry={props.coordinates}
            onClick={props.balloon.func}
            openBalloon={props.balloon.balloonOpen}
            onClose={props.balloon.balloonClose}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            properties={{
                balloonContentHeader: `<a href=${props.balloon.link}><h6>${props.balloon.title}</h6></a>`,
                balloonContentBody: `<p>${props.balloon.address}</p><p>${props.balloon.date}</p>`,
                balloonContentFooter: props.balloon.category,
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

const PlacemarkCitylife = (props) => {
    const placemarkOptions = {
        iconLayout: "default#image",
        iconImageSize: [32, 48],
        iconImageHref: props.active === true ? PlacemarkCitylifeColor : PlacemarkCitylifeBlack,
    }

    return (
        <Placemark
            options={placemarkOptions}
            geometry={props.coordinates}
            onClick={props.balloon.func}
            openBalloon={props.balloon.balloonOpen}
            onClose={props.balloon.balloonClose}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            properties={{
                balloonContentHeader: `<a href=${props.balloon.link}><h6>${props.balloon.title}</h6></a>`,
                balloonContentBody: `<p>${props.balloon.address}</p><p>${props.balloon.date}</p>`,
                balloonContentFooter: props.balloon.category,
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

export const MyMap = (props) => {
    const [MapPlacemark, SetMapPlacemark] = useState([<></>]);
    const [balloonIsOpen, setBalloonIsOpen] = useState(false);

    const handlePlacemarkClick = () => {
        setBalloonIsOpen(true);
    };

    const handleBalloonClose = () => {
        setBalloonIsOpen(false);
    };

    const mapData = {
        center: [55.751432, 37.618883],
        zoom: 10,
        controls: []
    };

    const mapOptions = {
        restrictMapArea: [
            [56.003477, 37.193216],
            [55.462172, 37.997975],
        ],
    };

    const clustererOptions = {
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterIconColor: '#E01B1B'
    }

    useEffect(() => {
        SetMapPlacemark([
            <PlacemarkFamily key="1pl" coordinates={[55.782301, 37.615136]}
                             balloon={{
                                 balloonOpen: balloonIsOpen,
                                 balloonClose: handleBalloonClose,
                                 func: handlePlacemarkClick,
                                 link: `/sport`,
                                 title: "ла",
                                 address: "address",
                                 category: "category",
                                 date: "date"}}/>,
            <PlacemarkArt key="2pl" coordinates={[55.802411, 37.635246]}
                             balloon={{
                                 balloonOpen: balloonIsOpen,
                                 balloonClose: handleBalloonClose,
                                 func: handlePlacemarkClick,
                                 link: `/sport`,
                                 title: "ла",
                                 address: "address",
                                 category: "category",
                                 date: "date"}}/>,
            <PlacemarkFestivals key="3pl" coordinates={[55.782191, 37.625026]}
                             balloon={{
                                 balloonOpen: balloonIsOpen,
                                 balloonClose: handleBalloonClose,
                                 func: handlePlacemarkClick,
                                 link: `/sport`,
                                 title: "ла",
                                 address: "address",
                                 category: "category",
                                 date: "date"}}/>,
            <PlacemarkExhibitions key="4pl" coordinates={[55.792411, 37.615136]}
                             balloon={{
                                 balloonOpen: balloonIsOpen,
                                 balloonClose: handleBalloonClose,
                                 func: handlePlacemarkClick,
                                 link: `/sport`,
                                 title: "ла",
                                 address: "address",
                                 category: "category",
                                 date: "date"}}/>,
            <PlacemarkSport key="5pl" coordinates={[55.802301, 37.625246]}
                             balloon={{
                                 balloonOpen: balloonIsOpen,
                                 balloonClose: handleBalloonClose,
                                 func: handlePlacemarkClick,
                                 link: `/sport`,
                                 title: "ла",
                                 address: "address",
                                 category: "category",
                                 date: "date"}}/>,
            <PlacemarkCitylife key="6pl" coordinates={[55.792201, 37.625126]}
                             balloon={{
                                 balloonOpen: balloonIsOpen,
                                 balloonClose: handleBalloonClose,
                                 func: handlePlacemarkClick,
                                 link: `/sport`,
                                 title: "ла",
                                 address: "address",
                                 category: "category",
                                 date: "date"}}/>]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div className={Style.InteractiveMap}>
            <YMaps enterprise
                   query={{
                       apikey: "2d497516-211b-4791-9eb2-bc59d4ea43ee",
                   }}>
                <Map width={"100%"} height={"100%"} options={mapOptions} state={mapData}>
                    <Clusterer options={clustererOptions}>
                        {MapPlacemark.map(elem => {return elem})}
                    </Clusterer>
                    <GeolocationControl options={{ float: "left" }} />
                    <FullscreenControl options={{ float: "right"}}/>
                    <ZoomControl options={{ float: "left" }}/>
                </Map>
            </YMaps>
        </div>
    )
}
