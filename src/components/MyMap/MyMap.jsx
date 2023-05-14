import React, {useState} from "react";
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
        iconColor: props.active === true ? '#E01B1B' : '#0E0E0E',
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
        iconColor: props.active === true ? '#D78C1C' : '#0E0E0E',
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
        iconColor: props.active === true ? '#3FC43C' : '#0E0E0E',
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
        iconColor: props.active === true ? '#01079D' : '#0E0E0E',
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
        iconColor: props.active === true ? '#B037C4' : '#0E0E0E',
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
        iconColor: props.active === true ? '#0DACB6' : '#0E0E0E',
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
    const [balloonIsOpen, setBalloonIsOpen] = useState(false);

    const handlePlacemarkClick = () => {
        setBalloonIsOpen(true);
    };

    const handleBalloonClose = () => {
        setBalloonIsOpen(false);
    };

    let festivals = [<></>];
    if (props.festivals !== undefined)
    {
        festivals = [];
        for (let i = 0; i < props.festivals.length; ++i)
        {
            if (props.festivals.Status !== 2) {
                festivals.push(<PlacemarkFestivals
                    coordinates={props.festivals[i].coordinates}
                    active={props.festivals[i].Status === 1 ? true : false}
                    balloon={{
                        balloonOpen: balloonIsOpen,
                        balloonClose: handleBalloonClose,
                        func: handlePlacemarkClick,
                        link: "/" + props.festivals[i].ID,
                        title: props.festivals[i].Name,
                        address: props.festivals[i].Address,
                        category: props.festivals[i].TypeEvent,
                        date: props.festivals[i].Date
                    }}/>);
            }
        }
    }

    let sport = [<></>];
    if (props.sport !== undefined)
    {
        sport = [];
        for (let i = 0; i < props.sport.length; ++i)
        {
            if (props.sport.Status !== 2) {
                sport.push(<PlacemarkSport
                    coordinates={props.sport[i].coordinates}
                    active={props.sport[i].Status === 1 ? true : false}
                    balloon={{
                        balloonOpen: balloonIsOpen,
                        balloonClose: handleBalloonClose,
                        func: handlePlacemarkClick,
                        link: "/" + props.sport[i].ID,
                        title: props.sport[i].Name,
                        address: props.sport[i].Address,
                        category: props.sport[i].TypeEvent,
                        date: props.sport[i].Date
                    }}/>);
            }
        }
    }

    let art = [<></>];
    if (props.art !== undefined)
    {
        art = [];
        for (let i = 0; i < props.art.length; ++i)
        {
            if (props.art.Status !== 2) {
                art.push(<PlacemarkArt
                    coordinates={props.art[i].coordinates}
                    active={props.art[i].Status === 1 ? true : false}
                    balloon={{
                        balloonOpen: balloonIsOpen,
                        balloonClose: handleBalloonClose,
                        func: handlePlacemarkClick,
                        link: "/" + props.art[i].ID,
                        title: props.art[i].Name,
                        address: props.art[i].Address,
                        category: props.art[i].TypeEvent,
                        date: props.art[i].Date
                    }}/>);
            }
        }
    }

    let family = [<></>];
    if (props.family !== undefined)
    {
        family = [];
        for (let i = 0; i < props.family.length; ++i)
        {
            if (props.family.Status !== 2) {
                family.push(<PlacemarkFamily
                    coordinates={props.family[i].coordinates}
                    active={props.family[i].Status === 1 ? true : false}
                    balloon={{
                        balloonOpen: balloonIsOpen,
                        balloonClose: handleBalloonClose,
                        func: handlePlacemarkClick,
                        link: "/" + props.family[i].ID,
                        title: props.family[i].Name,
                        address: props.family[i].Address,
                        category: props.family[i].TypeEvent,
                        date: props.family[i].Date
                    }}/>);
            }
        }
    }

    let exhibitions = [<></>];
    if (props.exhibitions !== undefined)
    {
        exhibitions = [];
        for (let i = 0; i < props.exhibitions.length; ++i)
        {
            if (props.exhibitions.Status !== 2) {
                exhibitions.push(<PlacemarkExhibitions
                    coordinates={props.exhibitions[i].coordinates}
                    active={props.exhibitions[i].Status === 1 ? true : false}
                    balloon={{
                        balloonOpen: balloonIsOpen,
                        balloonClose: handleBalloonClose,
                        func: handlePlacemarkClick,
                        link: "/" + props.exhibitions[i].ID,
                        title: props.exhibitions[i].Name,
                        address: props.exhibitions[i].Address,
                        category: props.exhibitions[i].TypeEvent,
                        date: props.exhibitions[i].Date
                    }}/>);
            }
        }
    }

    let citylife = [<></>];
    if (props.citylife !== undefined)
    {
        citylife = [];
        for (let i = 0; i < props.citylife.length; ++i)
        {
            if (props.citylife.Status !== 2) {
                citylife.push(<PlacemarkCitylife
                    coordinates={props.citylife[i].coordinates}
                    active={props.citylife[i].Status === 1 ? true : false}
                    balloon={{
                        balloonOpen: balloonIsOpen,
                        balloonClose: handleBalloonClose,
                        func: handlePlacemarkClick,
                        link: "/" + props.citylife[i].ID,
                        title: props.citylife[i].Name,
                        address: props.citylife[i].Address,
                        category: props.citylife[i].TypeEvent,
                        date: props.citylife[i].Date
                    }}/>);
            }
        }
    }

    const mapData = {
        center: props.coordinates === undefined ? [55.751432, 37.618883] : props.coordinates,
        zoom: props.coordinates === undefined ? 10 : 19,
        controls: []
    };

    const mapOptions = {
        restrictMapArea: [
            [57.003477, 36.193216],
            [54.462172, 38.997975],
        ],
    };


    const clustererOptionsArt = {
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterIconColor: '#E01B1B'
    }

    const clustererOptionsSport = {
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterIconColor: '#3FC33C'
    }

    const clustererOptionsFamily = {
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterIconColor: '#D78C1C'
    }

    const clustererOptionsFestivals = {
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterIconColor: '#01079D'
    }

    const clustererOptionsExhibitions = {
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterIconColor: '#B037C3'
    }

    const clustererOptionsCitylife = {
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterIconColor: '#0DACB6'
    }

    const clustererOptions = {
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterIconColor: '#0E0E0E'
    }

    if (festivals !== undefined && sport !== undefined && art !== undefined && family !== undefined && exhibitions !== undefined && citylife !== undefined)
    {
        return (
            <div className={Style.InteractiveMap}>
                <YMaps enterprise
                       query={{
                           apikey: "2d497516-211b-4791-9eb2-bc59d4ea43ee",
                       }}>
                    <Map width={"100%"} height={"100%"} options={mapOptions} modules={["clusterer.addon.balloon"]} state={mapData}>
                        <Clusterer options={clustererOptions}>
                            {festivals.map((elem) => (elem))}
                            {sport.map((elem) => (elem))}
                            {art.map((elem) => (elem))}
                            {family.map((elem) => (elem))}
                            {exhibitions.map((elem) => (elem))}
                            {citylife.map((elem) => (elem))}
                        </Clusterer>
                        <GeolocationControl options={{ float: "left" }} />
                        <FullscreenControl options={{ float: "right"}}/>
                        <ZoomControl options={{ float: "left" }}/>
                    </Map>
                </YMaps>
            </div>
        )
    }
    else
    {
        return (
            <div className={Style.InteractiveMap}>
                <YMaps enterprise
                       query={{
                           apikey: "2d497516-211b-4791-9eb2-bc59d4ea43ee",
                       }}>
                    <Map width={"100%"} height={"100%"} options={mapOptions} modules={["clusterer.addon.balloon"]} state={mapData}>
                        <Clusterer options={clustererOptionsFestivals}>
                            {festivals.map((elem) => (elem))}
                        </Clusterer>
                        <Clusterer options={clustererOptionsSport}>
                            {sport.map((elem) => (elem))}
                        </Clusterer>
                        <Clusterer options={clustererOptionsArt}>
                            {art.map((elem) => (elem))}
                        </Clusterer>
                        <Clusterer options={clustererOptionsFamily}>
                            {family.map((elem) => (elem))}
                        </Clusterer>
                        <Clusterer options={clustererOptionsExhibitions}>
                            {exhibitions.map((elem) => (elem))}
                        </Clusterer>
                        <Clusterer options={clustererOptionsCitylife}>
                            {citylife.map((elem) => (elem))}
                        </Clusterer>
                        <GeolocationControl options={{ float: "left" }} />
                        <FullscreenControl options={{ float: "right"}}/>
                        <ZoomControl options={{ float: "left" }}/>
                    </Map>
                </YMaps>
            </div>
        )
    }
}
