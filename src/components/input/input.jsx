import React from "react";
import Style from "./input.module.css";
import {ButtonClose, ButtonSearch} from "../buttons/buttons";
import classNames from "classnames";

export const InputWhite = (props) => {
    return (
        <div className={classNames(Style.Input, Style.White)}>
            <div>
                <ButtonSearch/>
                <input type="text" value={props.value} onChange={props.funcValue}/>
                <ButtonClose func={props.closeValue}/>
            </div>
        </div>
    )
}

export const InputBlack = (props) => {
    return (
        <div className={classNames(Style.Input, Style.Black)}>
            <div>
                <input type="text" value={props.value} onChange={props.funcValue}/>
                <ButtonClose func={props.closeValue}/>
            </div>
        </div>
    )
}