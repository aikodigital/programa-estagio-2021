import './styles/global.css';
import logoImg from './images/Logo.png';
import lupaImg from './images/loupe 1.png';
import busmarkerImg from './images/bus-stop 1.png';
import mapmarkerImg from './images/marker 1.png';
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

interface LineInformations {
  lt: string,
  tl: number,
  tp: string,
  ts: string
}

interface NomeParada {
  ed: string
  px: number,
  py: number,
  cp: number
}

interface Horario {
  t: number
}

const mapIcon = Leaflet.icon({
  iconUrl: busmarkerImg,
  iconSize: [38, 48],
  iconAnchor: [29, 68],
  popupAnchor: [-10, -70],
})

const mapIcon2 = Leaflet.icon({
  iconUrl: mapmarkerImg,
  iconSize: [38, 48],
  iconAnchor: [29, 68],
  popupAnchor: [-10, -70],
})

function App() {
  const [codigoLinha1, setCodigoLinha1] = useState("")
  const [posicaoVeiculos, setPosicaoVeiculos] = useState<IPos[]>([])
  const [codigoLinha2, setCodigoLinha2] = useState("")
  const [informacoesLinha, setInformacoesLinha] = useState<LineInformations>()
  const [codigoLinha3, setCodigoLinha3] = useState("")
  const [previsao, setPrevisao] = useState<Horario>()
  const [paradas, setParadas] = useState<NomeParada[]>([])

  const markers = posicaoVeiculos?.map((pos, i) =>
    <Marker icon={mapIcon} position={[pos.py, pos.px]} key={i}>
      <Popup closeButton={false}>
        Localização Atual do ônibus
      </Popup>
    </Marker>
  )

  const markers2 = paradas?.map((pos, i) =>
    <Marker icon={mapIcon2} position={[pos.py, pos.px]} key={i}>
      <Popup closeButton={false} className="popup">
        {pos.ed}
        <button onClick={(e) => previsaoChegada(e, pos.cp)}>Botão</button>
      </Popup>
    </Marker>
  )

  async function searchLine(e: any) {
    e.preventDefault()
    const response = await api.get(`/Linha/Buscar?termosBusca=${codigoLinha1}`)
    let temp: IPos[] = []
    await response.data.forEach(async (line: any) => {
      const cl = await api.get(`/Posicao/Linha?codigoLinha=${line.cl}`)
      await cl.data.vs.forEach((pos: any) => {
        temp.push({
          px: pos.px,
          py: pos.py
        })
      })
    })
    setPosicaoVeiculos(temp)
  }

  async function searchStops(e: any) {
    e.preventDefault()
    const response = await api.get(`/Linha/Buscar?termosBusca=${codigoLinha3}`)
    let temp: NomeParada[] = []
    let aux: number[] = []
    console.log(response.data)
    await response.data.forEach(async (line: any) => {
      const cp = await api.get(`/Parada/BuscarParadasPorLinha?codigoLinha=${line.cl}`)
      await cp.data.forEach((pos: any) => {
        if (!aux.includes(pos.cp)) {
          aux.push(pos.cp)
          temp.push({
            px: pos.px,
            py: pos.py,
            ed: pos.ed,
            cp: pos.cp
          })
        }
      })
    })
    setParadas(temp)
    console.log(temp)
  }

  async function searchLineInformations(e: any) {
    e.preventDefault()
    const response = await api.get(`/Linha/Buscar?termosBusca=${codigoLinha2}`)
    setInformacoesLinha(response.data[0])
  }

  async function previsaoChegada(e: any, cp: number) {
    e.preventDefault()
    const response = await api.get(`/Previsao/Parada?codigoParada=${cp}`)
    let temp: Horario[] = []
    console.log(response.data.p.l)
    response.data.p.l.forEach((line: any) => {
      line.vs.forEach((time: any) => {
        temp.push(time.t)
      })
    })
    let mintime = temp[0]
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] < mintime) {
        mintime = temp[i]
      }
    }
    setPrevisao(mintime)
  }

  useEffect(() => {
    api.post(`/Login/Autenticar?token=${process.env.REACT_APP_API}`).then((response) => {
      console.log(response)
    })
  }, [])

  return (
    <div id="single-page">
      <aside>
        <header>
          <img src={logoImg} alt="Olho Vivo" />
        </header>
        <div className="menu-options">
          <Accordion defaultActiveKey="" className="accordion">
            <Card className="card">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Localização dos Ônibus
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="card-body">
                  <InputGroup className="mb-3" onSubmit={searchLine}>
                    <FormControl className="form-control"
                      placeholder="Digite o código da linha para os veículos"
                      value={codigoLinha1}
                      onChange={(e: any) => setCodigoLinha1(e.target.value)}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" id="inputGroup-sizing-default" onClick={searchLine}><img src={lupaImg} alt="Buscar" /></Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="card">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Paradas
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="card-body">
                  <InputGroup className="mb-3" onSubmit={searchStops}>
                    <FormControl className="form-control"
                      placeholder="Digite o código da linha para as paradas"
                      value={codigoLinha3}
                      onChange={(e: any) => setCodigoLinha3(e.target.value)}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" id="inputGroup-sizing-default" onClick={searchStops}><img src={lupaImg} alt="Buscar" /></Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="card">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Informações das Linhas
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="card-body">
                  <InputGroup className="mb-3" onSubmit={searchLineInformations}>
                    <FormControl className="form-control"
                      placeholder="Digite o código da linha"
                      value={codigoLinha2}
                      onChange={(e: any) => setCodigoLinha2(e.target.value)}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" id="inputGroup-sizing-default" onClick={searchLineInformations}><img src={lupaImg} alt="Buscar" /></Button>
                    </InputGroup.Append>
                  </InputGroup>
                  {informacoesLinha && <div id="sentidos">
                    <div className="sentido1">
                      <div className="sentido">
                        <h6>Sentido 1</h6>
                      </div>
                      <div className="informacoes-linha">
                        <div className="letreiro">
                          <div className="primeira-parte">
                            <p>Letreiro: {informacoesLinha?.lt} -</p>
                          </div>
                          <div className="segunda-parte">
                            <p>{informacoesLinha?.tl}</p>
                          </div>
                        </div>
                        <div className="terminal-origem">
                          <div className="primeira-parte">
                            <p>Terminal de origem:</p>
                          </div>
                          <div className="segunda-parte">
                            <p>{informacoesLinha?.tp}</p>
                          </div>
                        </div>
                        <div className="terminal-destino">
                          <div className="primeira-parte">
                            <p>Terminal de destino:</p>
                          </div>
                          <div className="segunda-parte">
                            <p>{informacoesLinha?.ts}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sentido2">
                      <div className="sentido">
                        <h6>Sentido 2</h6>
                      </div>
                      <div className="informacoes-linha">
                        <div className="letreiro">
                          <div className="primeira-parte">
                            <p>Letreiro: {informacoesLinha?.lt} -</p>
                          </div>
                          <div className="segunda-parte">
                            <p>{informacoesLinha?.tl}</p>
                          </div>
                        </div>
                        <div className="terminal-origem">
                          <div className="primeira-parte">
                            <p>Terminal de origem:</p>
                          </div>
                          <div className="segunda-parte">
                            <p>{informacoesLinha?.tp}</p>
                          </div>
                        </div>
                        <div className="terminal-destino">
                          <div className="primeira-parte">
                            <p>Terminal de destino:</p>
                          </div>
                          <div className="segunda-parte">
                            <p>{informacoesLinha?.ts}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                </Card.Body>

              </Accordion.Collapse>
            </Card>
            <Card className="card">
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Previsão de Chegada
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="card-body1">
                  {previsao && <div className="previsao-de-chegada">
                    <div className="content">
                      <div className="first-child">
                        <p>O próximo ônibus chegará às</p>
                      </div>
                      <div className="last-child">
                        <p>{previsao}hs</p>
                      </div>
                    </div>
                  </div>}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </aside>
      <MapContainer center={[-23.550278, -46.633889]} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        {markers}
        {markers2}
      </MapContainer>
    </div>
  );
}

export default App;
