import React from "react";
import Style from "./PagesCategorySkeleton.module.css";
import classNames from "classnames";

export const PagesCategorySkeleton = (props) => {
    return (
        <section className={Style.PagesCategorySkeleton}>
            <section className={classNames(Style.HelloSection,props.HelloSection.style)}>
                <h1>{props.HelloSection.h1}</h1>
                <h4>
                    {props.HelloSection.h4}
                </h4>
            </section>
            <section>

            </section>
            <section>

            </section>
            <section>

            </section>
            <section>

            </section>
        </section>
    )
}