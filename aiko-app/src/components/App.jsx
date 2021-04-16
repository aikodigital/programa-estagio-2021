import React from 'react';
import { withScriptjs, withGoogleMap} from "react-google-maps"
import Header from "./Header";
//import stopPosition from './paradaPos';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormData from "./FormData";

require('dotenv').config()

//const posData = createJson();

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return( 
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
    </div>
  ); 
}

export default App;