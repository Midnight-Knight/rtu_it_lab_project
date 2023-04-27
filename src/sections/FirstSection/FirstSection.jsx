import React from "react";
import Style from "./FirstSection.module.css";

export const FirstSection = () => {
    return (
        <section className={Style.FirstSection}>
            <div></div>
            <div>
                <div className={Style.Grid}>
                    <div className={Style.GridCard}></div>
                    <div className={Style.GridCard}></div>
                    <div className={Style.GridCard}></div>
                    <div className={Style.GridCard}></div>
                    <div className={Style.GridCard}></div>
                    <div className={Style.GridCard}></div>
                </div>
            </div>
        </section>
    )
}