import React, {useState,useEffect} from 'react'
import getLanes from '../api/lanes.js'
import Table from './Table.js'

export default function PageLanes() {
    const { page } = styles;

    const [lanes, setLanes] = useState([]);

    useEffect(() => {
        const getAllLanes = async () => {
            const allLanes = await getLanes();
		    setLanes(allLanes);
        }

        getAllLanes()
    }, [])

    const columns = [
        {
            title: "Código Identificador do Corredor",
            field: "cc",
        },
        {
            title: "Nome do Corredor",
            field: "nc",
        }
    ];

    return (
        <div style={page}>
            <h1>Corredores</h1>
            <Table data={lanes} columns={columns}/>
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