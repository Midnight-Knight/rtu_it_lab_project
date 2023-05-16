import React, {useCallback, useMemo, useState} from "react";
import {
    Clusterer,
    FullscreenControl,
    GeolocationControl,
    Map,
    YMaps,
    ZoomControl
} from "@pbe/react-yandex-maps";
import Style from "./MyMap.module.css";
import {MyPlacemark} from "../Placemarks/Placemarks";

const mapOptions = {
    restrictMapArea: [
        [57.003477, 36.193216],
        [54.462172, 38.997975],
    ],
};

const FabricPropsMyPlacemark = (JsonObject, balloonIsOpen, handleBalloonClose, handlePlacemarkClick) => {
    if (JsonObject !== undefined)
    {
        const ArrayObject = [];
        for (let i = 0; i < JsonObject.length; ++i)
        {
            if (JsonObject[i].Status !== 2) {
                ArrayObject.push(<MyPlacemark
                    key={"MyPlacemark"+JsonObject[i].ID}
                    coordinates={JsonObject[i].coordinates}
                    active={JsonObject[i].Status === 1 ? true : false}
                    balloon={{
                        balloonOpen: balloonIsOpen,
                        balloonClose: handleBalloonClose,
                        func: handlePlacemarkClick,
                        link: "/" + JsonObject[i].ID,
                        title: JsonObject[i].Name,
                        address: JsonObject[i].Address,
                        category: JsonObject[i].TypeEvent,
                        date: JsonObject[i].Date
                    }}/>);
            }
        }
        return ArrayObject;
    }
    return [<></>];
}

const clustererOptions = {
    preset: "islands#invertedVioletClusterIcons",
    groupByCoordinates: false,
    clusterIconColor: '#0E0E0E'
}

export const MyMap = (props) => {
    const [balloonIsOpen, setBalloonIsOpen] = useState(false);

    const handlePlacemarkClick = useCallback(() => {
        setBalloonIsOpen(true);
    },[]);
    // eslint-disable-next-line

    const handleBalloonClose = useCallback(() => {
        setBalloonIsOpen(false);
    },[]);

    const placemarkProps = useMemo(
        () => ({
            balloonIsOpen,
            handlePlacemarkClick,
            handleBalloonClose,
        }),
        [balloonIsOpen, handlePlacemarkClick, handleBalloonClose]
    );


    const festivals = useMemo(() => FabricPropsMyPlacemark(props.festivals,placemarkProps.balloonIsOpen,placemarkProps.handlePlacemarkClick,placemarkProps.handleBalloonClose),[props.festivals,placemarkProps]);
    const sport = useMemo(() => FabricPropsMyPlacemark(props.sport,placemarkProps.balloonIsOpen,placemarkProps.handlePlacemarkClick,placemarkProps.handleBalloonClose), [props.sport, placemarkProps]);
    const art = useMemo(() => FabricPropsMyPlacemark(props.art,placemarkProps.balloonIsOpen,placemarkProps.handlePlacemarkClick,placemarkProps.handleBalloonClose),[props.art, placemarkProps]);
    const family = useMemo(() => FabricPropsMyPlacemark(props.family,placemarkProps.balloonIsOpen,placemarkProps.handlePlacemarkClick,placemarkProps.handleBalloonClose),[props.family, placemarkProps]);
    const exhibitions = useMemo(() => FabricPropsMyPlacemark(props.exhibitions,placemarkProps.balloonIsOpen,placemarkProps.handlePlacemarkClick,placemarkProps.handleBalloonClose), [props.exhibitions, placemarkProps]);
    const citylife = useMemo(() => FabricPropsMyPlacemark(props.citylife,placemarkProps.balloonIsOpen,placemarkProps.handlePlacemarkClick,placemarkProps.handleBalloonClose), [props.citylife, placemarkProps]);


    const mapData = useMemo(
        () => ({
            center: props.coordinates || [55.751432, 37.618883],
            zoom: props.coordinates ? 19 : 10,
            controls: [],
        }),
        [props.coordinates]
    );

    return (
        <div className={Style.InteractiveMap}>
            <YMaps enterprise
                   query={{
                       apikey: "2d497516-211b-4791-9eb2-bc59d4ea43ee",
                   }}>
                <Map width={"100%"} height={"100%"} options={mapOptions} modules={["clusterer.addon.balloon"]} state={mapData}>
                    <Clusterer options={clustererOptions}>
                        {[...festivals, ...sport, ...art, ...family, ...exhibitions, ...citylife]}
                    </Clusterer>
                    <GeolocationControl options={{ float: "left" }} />
                    <FullscreenControl options={{ float: "right"}}/>
                    <ZoomControl options={{ float: "left" }}/>
                </Map>
            </YMaps>
        </div>
    )
}
