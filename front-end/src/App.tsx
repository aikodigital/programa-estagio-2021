import './styles/global.css';
import logoImg from './images/Logo.png';
import lupaImg from './images/loupe 1.png';
import busmarkerImg from './images/bus-stop 1.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Accordion, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import Leaflet from 'leaflet';
import api from './services/api.js';
import { useEffect, useState } from 'react';

import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IPos {
  px: number,
  py: number
}

const mapIcon = Leaflet.icon({
  iconUrl: busmarkerImg,
  iconSize: [38, 48],
  iconAnchor: [29, 68],
  popupAnchor: [-10, -70],
})

function App() {
  const [codigoLinha1, setCodigoLinha1] = useState("")
  const [posicaoVeiculos, setPosicaoVeiculos] = useState<IPos[]>([])

  async function searchLine(e: any) {
    e.preventDefault()
    const response = await api.get(`/Linha/Buscar?termosBusca=${codigoLinha1}`)
    let temp: IPos[] = []
    response.data.forEach(async(line: any) => {
      const cl = await api.get(`/Posicao/Linha?codigoLinha=${line.cl}`)
      cl.data.vs.forEach((pos: any) => {
        temp.push({
          px: pos.px,
          py: pos.py
        })
      })
    })
    temp = temp.slice(1)
    setPosicaoVeiculos(temp)
  }

  async function clickOnibus(e: any) {
    e.preventDefault()
    /*const response = await api.get(`/Posicao`)
    console.log(response.data)
    const array = response.data.l
    const temp: IPos[] = []
    array.forEach((value: any) => {
      value.vs.forEach((pos: any) => {
        temp.push({
          px: pos.px,
          py: pos.py
        })
      })
    })*/
  }

  console.log(posicaoVeiculos)

  useEffect ( () => {
    api.post(`/Login/Autenticar?token=${process.env.REACT_APP_API}`).then((response) => {
      console.log(response)
    })
  },[])

  useEffect ( () => {
      console.log("Atualizou!")
      setCodigoLinha1("")
  },[posicaoVeiculos])

  return (
    <div id="single-page">
      <aside>
        <header>
          <img src={logoImg} alt="Olho Vivo" />
        </header>
        <div className="menu-options">
          <Accordion defaultActiveKey="" className="accordion">
            <Card className="card">
              <Accordion.Toggle as={Card.Header} eventKey="0" onClick={clickOnibus}>
                Localização dos Ônibus
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="card-body">
                  <InputGroup className="mb-3">
                    <FormControl className="form-control"
                      placeholder="Digite o código da linha para os veículos"
                      value={codigoLinha1}
                      onChange={(e) => setCodigoLinha1(e.target.value)}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" id="inputGroup-sizing-default" onClick={searchLine}><img src={lupaImg} alt="Buscar" /></Button>
                    </InputGroup.Append>
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
                  <InputGroup className="mb-3">
                    <FormControl className="form-control"
                      placeholder="Digite o código da linha para as paradas"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" id="inputGroup-sizing-default" ><img src={lupaImg} alt="Buscar" /></Button>
                    </InputGroup.Append>
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
                  <InputGroup className="mb-3">
                    <FormControl className="form-control"
                      placeholder="Digite o código da linha"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" id="inputGroup-sizing-default" ><img src={lupaImg} alt="Buscar" /></Button>
                    </InputGroup.Append>
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
                  <InputGroup className="mb-3">
                    <FormControl className="form-control"
                      placeholder="Digite o código da linha"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" id="inputGroup-sizing-default" ><img src={lupaImg} alt="Buscar" /></Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <br />
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="card-body">
                  <InputGroup className="mb-3">
                    <FormControl className="form-control"
                      placeholder="Digite o nome de sua parada atual"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" id="inputGroup-sizing-default" ><img src={lupaImg} alt="Buscar" /></Button>
                    </InputGroup.Append>
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
      <MapContainer center={[-23.6821604,-46.8754915]} zoom={15} style={{ width: '100%', height: '100%' }}>
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        {posicaoVeiculos?.map((pos, i) =>
          <Marker icon={mapIcon} position={[pos.py, pos.px]} key = {i}>
            <Popup closeButton={false}>
              Localização Atual
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default App;
