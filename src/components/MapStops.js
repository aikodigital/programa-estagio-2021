import React from 'react';
import GoogleMapReact from 'google-map-react';
import StopIcon from './StopIcon.js';

export default function MapStops({positions}) {

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
                    <StopIcon key={position.cp} code={position.cp} name={position.np} addres={position.ed} lat={position.py} lng={position.px} />
                );
            	})}
			</GoogleMapReact>
		</div>
	);
}