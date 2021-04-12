import './styles/global.css';
import busmarkerImg from './images/Logo.png';
import lupaImg from './images/loupe 1.png';
import mapmarkerImg from './images/location.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Accordion, Card, InputGroup, FormControl } from 'react-bootstrap';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapIcon = Leaflet.icon ({
  iconUrl: mapmarkerImg,
  iconSize: [38, 48],
  iconAnchor: [29, 68],
  popupAnchor: [-10, -70],
})

function App() {
  return (
    <div id="single-page">
      <aside>
        <header>
          <img src={busmarkerImg} alt="Olho Vivo" />
        </header>
        <div className="menu-options">
          <Accordion defaultActiveKey="" className="accordion">
            <Card className="card">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Localização dos Ônibus
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="card-body">
                  <h6>Digite o código da linha e localize os veículos</h6>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                  <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="card">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Paradas
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="card-body">
                  <h6>Digite o código da linha e localize as paradas</h6>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                  <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="card">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Informações das Linhas
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="card-body">
                  <h6>Digite o código da linha e vejas suas informações</h6>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                  <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <div className="sentidos">
              <div className="sentido1">
                <div className="sentido">
                  <h6>Sentido 1</h6>
                </div>
                <p>Operação:</p>
                <p>Letreiro:</p>
                <p>Letreiro Descritivo:</p>
              </div>
              <div className="sentido2">
                <div className="sentido">
                  <h6>Sentido 2</h6>
                </div>
                <p>Operação:</p>
                <p>Letreiro:</p>
                <p>Letreiro Descritivo:</p>
              </div>
            </div>
            <Card className="card">
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Previsão de Chegada
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="card-body">
                  <h6>Digite o código da linha</h6>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                  <br />
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="card-body">
                  <h6>Digite o nome da parada na qual se localiza</h6>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                  <br />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <div className="previsao-de-chegada">
              <div className="content">
                <div className="first-child">
                  <p>A previsão de chegada é de</p>
                </div>
                <div className="last-child">
                  <p>10min</p>
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </aside>
      <MapContainer center = {[-23.6815315, -46.8754901]} zoom = {15} style = {{ width: '100%', height: '100%' }}>
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        <Marker icon = {mapIcon} position={[-23.6815315, -46.8754901]}>
          <Popup closeButton = {false}>
            Localização Atual
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
