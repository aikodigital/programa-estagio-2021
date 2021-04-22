import React, {useState,useEffect} from 'react'
import FilterBar from './FilterBar.js'
import Table from './Table.js'
import getPredictions from '../api/arrivalTimePredictions.js';

export default function PagePredictions() {
    const { page } = styles;

    const [filterText, setFilterText] = useState('');
    const [predictions, setPredictions] = useState([]);

    const handleNewFilter = (filter) => {
        setFilterText(filter);
    }
    useEffect(() => {
        const getAllPredictions = async () => {
            const allPredictions = await getPredictions(filterText);
		    setPredictions(allPredictions);
        }

        getAllPredictions();
    }, [filterText])

    const columns = [
        {
            title: "Código da Linha",
            field: "cl",
        },
        {
            title: "Letreiro Completo",
            field: "c",
        },
        {
            title: "Prefixo do Veículo",
            field: "p",
        },
        {
            title: "Acessível para Pessoas com Deficiência",
            field: "a",
        },
        {
            title: "Horáio Previsto de Chegada",
            field: "t",
        }
    ];

    return (
        <div style={page}>
            <h1>Previsões de Chegada</h1>
            <FilterBar onNewFilter={handleNewFilter} initialValue={filterText}/>
            <Table data={predictions} columns={columns}/>
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