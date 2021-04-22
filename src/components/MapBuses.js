import React from 'react';
import GoogleMapReact from 'google-map-react';
import BusIcon from './BusIcon.js';

export default function MapBuses({positions}) {

	/*Componente Google Maps da biblioteca 'google-map-react', dentro dele é renderizado 1 componente para cada posição requisitada.*/
	return (
		<div style={{ width: "100%", height: "calc(100% - 86px)", paddingBottom: "20px" }}>
			<GoogleMapReact
				defaultCenter={{
					lat: -23.5489,
					lng: -46.6388
				}}
				defaultZoom={13}
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
				yesIWantToUseGoogleMapApiInternals
			>
				{positions.map((position) => {
                return (
                    <BusIcon key={position.p} prefixo={position.p} lat={position.py} lng={position.px} />
                );
            	})}
			</GoogleMapReact>
		</div>
	);
}