import React, {useState,useEffect} from 'react'
import MapBuses from './MapBuses'
import Spinner from './Spinner.js';
import getBusPositions from '../api/busPositions.js'

export default function PageBuses() {
    const { page } = styles;

    const [busPositions, setBusPositions] = useState([]);

    /*Requisição das posições do veículos a cada 3 segundos, caso a variável de dados seja recebida nula, entra no catch e não atualiza o vetor de posições.*/
    useEffect(() => {
        async function getPositions() {
            try {
                const allBusPositions = await getBusPositions();
                setBusPositions(allBusPositions);
            } catch (Error) {
                console.error(Error);
            }
        }

        const interval = setInterval(() => {
            getPositions();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    //Componente Spinner renderizado, enquanto as posicões são requisitadas.
    return (
        <div style={page}>
            <h1>Posições dos veículos</h1>
            {busPositions.length === 0 && <Spinner />}
            {busPositions.length > 0 && <MapBuses positions={busPositions} />}
        </div>
    )
}

const styles = {
    page: {
        marginLeft: "260px",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "relative",
        height: "100vh",
        width: "calc(100% - 260px)"
    }
}