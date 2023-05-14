import React, {useState} from "react";
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

    const handlePlacemarkClick = () => {
        setBalloonIsOpen(true);
    };

    const handleBalloonClose = () => {
        setBalloonIsOpen(false);
    };


    const festivals = FabricPropsMyPlacemark(props.festivals,balloonIsOpen,handlePlacemarkClick,handleBalloonClose);
    const sport = FabricPropsMyPlacemark(props.sport,balloonIsOpen,handlePlacemarkClick,handleBalloonClose);
    const art = FabricPropsMyPlacemark(props.art,balloonIsOpen,handlePlacemarkClick,handleBalloonClose);
    const family = FabricPropsMyPlacemark(props.family,balloonIsOpen,handlePlacemarkClick,handleBalloonClose);
    const exhibitions = FabricPropsMyPlacemark(props.exhibitions,balloonIsOpen,handlePlacemarkClick,handleBalloonClose);
    const citylife = FabricPropsMyPlacemark(props.citylife,balloonIsOpen,handlePlacemarkClick,handleBalloonClose);


    const mapData = {
        center: props.coordinates === undefined ? [55.751432, 37.618883] : props.coordinates,
        zoom: props.coordinates === undefined ? 10 : 19,
        controls: []
    };

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
