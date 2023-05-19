import React from "react";
import Style from "./buttons.module.css";
import classNames from "classnames";

export const ButtonLogo = () => {
    return (
        <a className={classNames(Style.Button, Style.ButtonLogo)} href="/">
        </a>
    )
}

export const ButtonNavMenu = (props) => {
    return (
        <button className={classNames(Style.Button, Style.ButtonNavMenu)} onClick={props.func}>
        </button>
    )
}

export const ButtonNav = (props) => {
    return (
        <a className={classNames(Style.Button, Style.ButtonText, Style.ButtonNav)} href={props.href}>
            <img src={props.image} alt=""/>
            <h4>{props.text}</h4>
        </a>
    )
}

export const ButtonText = (props) => {
    return (
        <button className={classNames(props.widthAuto === true ? Style.ButtonWidthAuto : Style.Button, Style.ButtonText)} onClick={props.func}>
            <h6>{props.text}</h6>
        </button>
    )
}

export const ButtonTextLink = (props) => {
    return (
        <a className={classNames(Style.Button, Style.ButtonText)} href={props.href}>
            <h6>{props.text}</h6>
        </a>
    )
}

export const ButtonTextH4 = (props) => {
    return (
        <button className={classNames(props.widthAuto === true ? Style.ButtonWidthAuto : Style.Button, Style.ButtonText)} onClick={props.func}>
            <h4>{props.text}</h4>
        </button>
    )
}