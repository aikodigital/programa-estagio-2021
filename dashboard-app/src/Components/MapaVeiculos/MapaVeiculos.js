import { useEffect } from "react";
import { GET_POSICAO } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import { useGoogleMaps } from "react-hook-google-maps";

const MapaVeiculos = () => {
    
    

    

    const { ref, map, google } = useGoogleMaps(process.env.REACT_APP_API_KEY,
        {
          center: { lat:  -23.5489, lng: -46.6388},
          zoom: 3,
        },
      );
      console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
      console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
      return <div ref={ref} style={{ width: 400, height: 300 }} />;
    

    
};

export default MapaVeiculos;