import React from "react";
import Style from "./buttons.module.css";
import classNames from "classnames";

export const ButtonLogo = (props) => {
    return (
        <button className={classNames(Style.Button, Style.ButtonLogo)} onClick={props.func}>
        </button>
    )
}

export const ButtonLogoMobile = (props) => {
    return (
        <button className={classNames(Style.ButtonMobile,Style.ButtonLogo)} onClick={props.func}>
        </button>
    )
}

export const ButtonNav = (props) => {
    return (
        <button className={classNames(Style.Button, Style.ButtonNav)} onClick={props.func}>
        </button>
    )
}

export const ButtonFilled = (props) => {
    return (
        <button className={classNames(Style.Button, Style.ButtonFilled)} onClick={props.func}>
            <h6>{props.text}</h6>
        </button>
    )
}

export const ButtonOutlined = (props) => {
    return (
        <button className={classNames(Style.Button, Style.ButtonOutlined)} onClick={props.func}>
            <h6>{props.text}</h6>
        </button>
    )
}

export const ButtonText = (props) => {
    return (
        <button className={classNames(Style.Button, Style.ButtonText)} onClick={props.func}>
            <h6>{props.text}</h6>
        </button>
    )
}

export const ButtonTextH4 = (props) => {
    return (
        <button className={classNames(Style.Button, Style.ButtonText)} onClick={props.func}>
            <h4>{props.text}</h4>
        </button>
    )
}

export const ButtonElevated = (props) => {
    return (
        <button className={classNames(Style.Button, Style.ButtonElevated)} onClick={props.func}>
            <h6>{props.text}</h6>
        </button>
    )
}

export const ButtonTonal = (props) => {
    return (
        <button className={classNames(Style.Button, Style.ButtonTonal)} onClick={props.func}>
            <h6>{props.text}</h6>
        </button>
    )
}