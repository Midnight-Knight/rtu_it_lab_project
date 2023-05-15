import React, {useMemo, useState} from "react";
import Style from "./ListBlock.module.css";

export const ListBlock = (props) => {
    const List = useMemo(() =>
        props.array
    ,[props.array]);


    return (
        <div className={Style.ListBlock}>

        </div>
    )
}