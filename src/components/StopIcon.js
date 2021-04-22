import React from 'react'
import css from "./StopIcon.module.css"

export default function StopIcon({code, name, addres}) {

    return (
        <div className={css.tooltip}>
            <img src="marker.png" alt="BusStop" style={{width: "8px", height: "16px"}}/>
            <div className={css.tooltiptext}>
                <span>Código:{code}</span>
                <span>Nome:{name}</span>
                <span>Endereço:{addres}</span>
            </div>
        </div>
    )
}