import React from "react";
import Style from "./PagesCategorySkeleton.module.css";
import UnitedStyle from "./../PageStyle.module.css";
import classNames from "classnames";
import {MyMap} from "../../components/MyMap/MyMap";
import {ListBlock} from "../../components/ListBlock/ListBlock";

export const PagesCategorySkeleton = (props) => {
    return (
        <section className={UnitedStyle.Page}>
            <section className={classNames(Style.HelloSection,props.HelloSection.style)}>
                <h1>{props.HelloSection.h1}</h1>
            </section>
            <section className={Style.SectionOne}>
                <h2>{props.SectionOne.h2}</h2>
                <div>
                    <div>
                        <img alt="" src={props.SectionOne.image1}/>
                        <h5>{props.SectionOne.Oneh5}</h5>
                    </div>
                    <div>
                        <img alt="" src={props.SectionOne.image2}/>
                        <h5>{props.SectionOne.Twoh5}</h5>
                    </div>
                </div>
            </section>
            <section className={Style.SectionTwo}>
                <h2>Интерактивная карта</h2>
                <h5>{props.SectionTwo.h5}</h5>
                <MyMap festivals={props.festivals} sport={props.sport} exhibitions={props.exhibitions} family={props.family} citylife={props.citylife} art={props.art}/>
            </section>
            <section className={Style.SectionThree}>
                <h2>Список мероприятий</h2>
                <ListBlock/>
            </section>
        </section>
    )
}