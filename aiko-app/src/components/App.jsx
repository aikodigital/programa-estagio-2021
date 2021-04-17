import React, { useEffect, useState } from 'react';
import { withScriptjs, withGoogleMap} from "react-google-maps"
import Header from "./Header";
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormData from "./FormData";
import TableLinha from "./Table";
import TablePrev from "./TablePrev";
import Api from "../api/api";
import MapProvider from "./mapContext";
import {InputGroup, FormControl, Button, Form} from 'react-bootstrap'
import stopPrevJson from "./createStopJson";

require('dotenv').config()

function App() {

  const [tableLinhasData, setTableLinhasData] = useState([]);
  const [tableStopData, setTableStopData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      return Api.postApi();
    }
    fetchUser();
  },[])

  const WrappedMap = withScriptjs(withGoogleMap(Map));


  const handleSubmit = async (event) => {
    const info = event.target[0].value;
    console.log(info);

    if(info !== null){

      setTableLinhasData(await Api.getLinhas(info));

    }
  }

  const handleSubmitStop = async (event) => {
    const info = event.target[0].value;
    console.log(info);

    if(info !== null){

      setTableStopData(await stopPrevJson(info));

    }
  }

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
        <h2 className="h2-title">Pesquisar por linhas:</h2>
          <Form
                onSubmit={(e) => (
                    // eslint-disable-next-line no-sequences
                    e.preventDefault(),
                    handleSubmit(e)
                )}>
                <InputGroup className="mb-3" type="text" >
                    <FormControl  
                        type="text"
                        placeholder="Nome / Número da linha"
                        aria-label="Nome / Número da linha"
                        aria-describedby="basic-addon2"/>
                    <InputGroup.Append>
                    <Button variant="outline-secondary" type="submit">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
          <div className= "table1">
            <TableLinha dataBus = {tableLinhasData} />
          </div>
          <h2 className="h2-title">Pesquisar Horários em cada parada:</h2>

          <Form
                onSubmit={(e) => (
                    // eslint-disable-next-line no-sequences
                    e.preventDefault(),
                    handleSubmitStop(e)
                )}>
                <InputGroup className="mb-3" type="text" >
                    <FormControl  
                        type="text"
                        placeholder="Código Parada"
                        aria-label="Código Parada"
                        aria-describedby="basic-addon2"/>
                    <InputGroup.Append>
                    <Button variant="outline-secondary" type="submit">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
          <div className= "table1">
            <TablePrev dataBus = {tableStopData} />
          </div>
        </div>
      </div>
    </MapProvider>
  ); 
}

export default App;