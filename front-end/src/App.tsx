import './styles/global.css';
import busmarkerImg from './images/Logo.png';
import lupaImg from './images/loupe 1.png';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Accordion, Card, InputGroup, FormControl } from 'react-bootstrap';

import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar"/></InputGroup.Text>
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
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar"/></InputGroup.Text>
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
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar"/></InputGroup.Text>
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
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Previsão de Chegada
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="card-body">
                  <h6>Digite o código da linha</h6>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar"/></InputGroup.Text>
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
                      <InputGroup.Text id="inputGroup-sizing-default"><img src={lupaImg} alt="Buscar"/></InputGroup.Text>
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
          </Accordion>
        </div>
        {/*(<div className="menu-options">
          <div className="localizacao-dos-onibus">
            <button>Localização dos Ônibus</button>
            <div className="dropdown-localizacao">
              <p>Hello World</p>
            </div>
          </div>
          <button>Paradas</button>
          <button>Informações das Linhas</button>
          <button className="previsao-de-chegada">Previsão de Chegada</button>
  </div>*/}
      </aside>
      <MapContainer
        center={[-23.6815315, -46.8754901]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/*<TileLayer url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </MapContainer>
    </div>
  );
}

export default App;
