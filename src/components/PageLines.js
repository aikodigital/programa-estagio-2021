import React, {useState,useEffect} from 'react'
import Table from './Table.js'
import getLines from '../api/lines.js';
import FilterBar from './FilterBar.js';

export default function PageLines() {
    const { page } = styles;

    const [filterText, setFilterText] = useState('');
    const [lines, setLines] = useState([]);

    const handleNewFilter = (filter) => {
        setFilterText(filter);
    }
    useEffect(() => {
        const getAllLines = async () => {
            const allLines = await getLines(filterText);
		    setLines(allLines);
        }

        getAllLines()
    }, [filterText])

    //Array parâmetro para o componente Table criado a partir do Material Table do material ui
    const columns = [
        {
            title: "Código da Linha",
            field: "cl",
        },
        {
            title: "Circular",
            field: "lc",
        },
        {
            title: "Letreiro Completo",
            field: "lt",
        },
        {
            title: "Terminal Inicial",
            field: "tp",
        },
        {
            title: "Terminal Final",
            field: "ts",
        }
    ];

    return (
        <div style={page}>
            <h1>Linhas</h1>
            <FilterBar onNewFilter={handleNewFilter} initialValue={filterText}/>
            <Table data={lines} columns={columns}/>
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