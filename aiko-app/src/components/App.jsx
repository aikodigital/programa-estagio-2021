import React, { useEffect } from 'react';
import { withScriptjs, withGoogleMap} from "react-google-maps"
import Header from "./Header";
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormData from "./FormData";
import Table from "./Table";
import Api from "../api/api";
import MapProvider from "./mapContext";

require('dotenv').config()

function App() {

  useEffect(() => {
    const fetchUser = async () => {
      return Api.postApi();
    }
    fetchUser();
  },[])

  const WrappedMap = withScriptjs(withGoogleMap(Map));
  
  return( 
    <MapProvider>
      <div>
        <Header />
        <div className = "dashboard-div">
          <div className = "map-div">
            <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
              loadingElement = {<div style= {{height: "100%"}} />}
              containerElement = {<div style= {{height: "100%"}} />}
              mapElement = {<div style= {{height: "100%"}} />}
            />
          </div>
          <div className="filter-div">
            <FormData />
          </div>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </MapProvider>
  ); 
}

export default App;