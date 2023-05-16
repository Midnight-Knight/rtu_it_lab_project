import React, {useMemo} from "react";
import Style from "./ListBlock.module.css";
import {ButtonTextLink} from "../buttons/buttons";
import classNames from "classnames";

const ElementBlock = (props) => {

    let StyleType;
    let StyleTypeActive;
    switch (props.event.TypeEvent)
    {
        case "Художественные выставки":
            StyleType = Style.ElementImgArt;
            StyleTypeActive = Style.ElementImgActiveArt;
            break;
        case "Столичная жизнь":
            StyleType = Style.ElementImgCitylife;
            StyleTypeActive = Style.ElementImgActiveCitylife;
            break;
        case "Профессиональные выставки и форумы":
            StyleType = Style.ElementImgExhibitions;
            StyleTypeActive = Style.ElementImgActiveExhibitions;
            break;
        case "Отдых с детьми":
            StyleType = Style.ElementImgFamily;
            StyleTypeActive = Style.ElementImgActiveFamily;
            break;
        case "Фестивали и праздники":
            StyleType = Style.ElementImgFestivals;
            StyleTypeActive = Style.ElementImgActiveFestivals;
            break;
        case "Спорт":
            StyleType = Style.ElementImgSport;
            StyleTypeActive = Style.ElementImgActiveSport;
    }


    return (
        <div className={Style.ElementBlock}>
            <div className={classNames(Style.ElementImg,StyleType, props.event.Status === 1 ? StyleTypeActive : props.event.Status === 2 ? Style.ElementPassive : undefined)}/>
            <div className={Style.ElementText}>
                <div>
                    <h4>{props.event.Name}</h4>
                    <h6>{props.event.Address}</h6>
                    <h6>{props.event.Date}</h6>
                </div>
                <div>
                    <ButtonTextLink text="Перейти на страницу" href={"/" + props.event.ID}/>
                    {
                        props.event.Status === 1 ?
                            <ButtonTextLink text="Посмотреть трансляцию" href={"/" + props.event.ID + "#stream"}/> : props.event.Status === 2 ?
                                <ButtonTextLink text="Посмотреть запись" href={"/" + props.event.ID + "#stream"}/> : <></>
                    }
                </div>
            </div>
        </div>
    )
}

const CreateList = (array) => {
    const buffer = [];
    if (array !== undefined) {
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < array.length; ++j) {
                if (i === 0 && array[j].Status === 1) {
                    buffer.push(<ElementBlock key={"ElementList" + array[j].ID} event={array[j]}/>);
                } else if (i === 1 && array[j].Status === 0) {
                    buffer.push(<ElementBlock key={"ElementList" + array[j].ID} event={array[j]}/>);
                } else if (i === 2 && array[j].Status === 2) {
                    buffer.push(<ElementBlock key={"ElementList" + array[j].ID} event={array[j]}/>);
                }
            }
        }
    }
    return buffer;
}

export const ListBlock = (props) => {
    const List = useMemo(() =>
            [...CreateList(props.festivals), ...CreateList(props.art), ...CreateList(props.citylife), ...CreateList(props.sport), ...CreateList(props.family), ...CreateList(props.exhibitions)]
    ,[props.festivals, props.art, props.citylife, props.sport, props.family, props.exhibitions]);




    return (
        <div className={Style.ListBlock}>
            {List.map((elem) => elem)}
        </div>
    )
}