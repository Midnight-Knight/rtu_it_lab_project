import React from "react";
import Style from "./inputs.module.css";
import classNames from "classnames";

// type - email или password

export const MyInputs = (props) => {
    return (
        <div className={Style.Inputs}>
            <div className={Style.InputsHeader}>{props.valueHeader === undefined ? "Label" : props.valueHeader}</div>
            <input className={classNames(Style.InputsBlock,props.active === true ? Style.InputsActiveRed : Style.InputsActiveBlue)} onChange={props.change} placeholder={props.valueInput === undefined ? "Поле ввода" : props.valueInput} type={props.type}/>
            <div className={props.active === true ? classNames(Style.InputsFooter, Style.InputsFooterActiveRed) : Style.InputsFooter}>{props.valueFooter === undefined ? "Supporting text" : props.valueFooter}</div>
        </div>
    )
}