import React, {useState,useEffect}from 'react'
import MapStops from './MapStops.js'
import getBusStops from '../api/busStops.js';

export default function PageStops() {
    const { page } = styles;

    const [stopsPositions, setStopsPositions] = useState([]);

    useEffect(() => {
		async function getStopsPositions() {
			const allStopsPositions = await getBusStops();

			setStopsPositions(allStopsPositions);
		}
		
		getStopsPositions()
	}, []);

    return (
        <div style={page}>
            <h1>Posições das Paradas</h1>
            <MapStops positions={stopsPositions} />
        </div>
    )
}

const styles = {
    page: {
        marginLeft: "260px",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "relative",
        height: "100vh",
        width: "calc(100% - 260px)"
    }
}