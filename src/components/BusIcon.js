import React from 'react'
import css from "./BusIcon.module.css"

export default function BusIcon({prefixo,lat,lng}) {

    //Maior css, documento separado.
    return (
        <div className={css.tooltip}>
            <img src="front-of-bus.png" alt="Bus" style={{width: "8px", height: "8px"}}/>
            <div className={css.tooltiptext}>
                <span>Código:{prefixo}</span>
                <span>Latitude:{lat.toFixed(2)}</span>
                <span>Longitude:{lng.toFixed(2)}</span>
            </div>
        </div>
    )
}