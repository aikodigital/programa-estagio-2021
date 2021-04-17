import React, {createContext, useContext, useState} from "react";
import posJson from "./posJson";

const MapContext = createContext();

export default function MapProvider({ children }) {
    
    const [mapData, setMapData] = useState({
        info : "",
        busPos : posJson(),
        searchData : {
            icon :  'https://image.freepik.com/free-icon/bus_318-2038.jpg',
            info1 : 'Ônibus:',
            info2 : 'Origem:',
            info3 : 'Destino'
        }
        
    });

    return <MapContext.Provider value = {{
        mapData,
        setMapData
    }}>{ children }</MapContext.Provider>
}

export function UseMap(){
    const context = useContext(MapContext);
    const { mapData , setMapData } = context;
    return { mapData, setMapData };
}