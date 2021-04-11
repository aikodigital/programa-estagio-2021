import './styles/global.css';
import busmarkerImg from './images/Logo.png';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div id = "single-page">
      <aside>
        <header>
          <img src={busmarkerImg} alt="Olho Vivo"/>
        </header>
      </aside>
      <MapContainer
        center = {[-23.6815315,-46.8754901]}
        zoom = {15}
        style = {{width: '100%', height: '100%'}}
      >
        {/*<TileLayer url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
        <TileLayer url = {`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      </MapContainer>
    </div>
  );
}

export default App;
