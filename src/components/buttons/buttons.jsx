import React from "react";
import Style from "./buttons.module.css";
import classNames from "classnames";

export const ButtonLogo = () => {
    return (
        <a className={classNames(Style.Button, Style.ButtonLogo)} href="/">
        </a>
    )
}

export const ButtonLogoMobile = () => {
    return (
        <a className={classNames(Style.ButtonMobile,Style.ButtonLogo)} href="/">
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
        <button className={classNames(Style.Button, Style.ButtonText)} href={props.href}>
            <h6>{props.text}</h6>
        </button>
    )
}

export const ButtonNavH4 = (props) => {
    return (
        <a className={classNames(Style.Button, Style.ButtonText)} href={props.href}>
            <h4>{props.text}</h4>
        </a>
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