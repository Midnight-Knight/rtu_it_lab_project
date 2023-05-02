import React from "react";
import Style from "./PagesCategorySkeleton.module.css";
import classNames from "classnames";
import {MyMap} from "../../components/MyMap/MyMap";
import {ListBlock} from "../../components/ListBlock/ListBlock";

export const PagesCategorySkeleton = (props) => {
    return (
        <section className={Style.PagesCategorySkeleton}>
            <section className={classNames(Style.HelloSection,props.HelloSection.style)}>
                <h1>{props.HelloSection.h1}</h1>
                <h4>
                    {props.HelloSection.h4}
                </h4>
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
            <section className={classNames(Style.SectionTwo, props.SectionSettings.style)}>
                <h2>Интерактивная карта</h2>
                <h5>{props.SectionTwo.h5}</h5>
                <MyMap/>
            </section>
            <section className={Style.SectionThree}>
                <h2>Список мероприятий</h2>
                <ListBlock/>
            </section>
        </section>
    )
}