import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { UseMap } from "./mapContext";
import paradaJson from "./paradaJson";
import posJson from "./posJson";

function FormData(){
    
    const { setMapData } = UseMap();
    const [search, setSearch] = useState({
        numLinha: null,
        option: "Ônibus"
    })

    useEffect(() => {
        let option = search.option;
        let termo = search.termo;

        if(option === "Paradas"){

            const fetchedData = async () => {
                const fetchData = await paradaJson(termo);
                setMapData({
                    info : termo,
                    busPos : fetchData,
                    searchData : {
                        icon :  'https://img.icons8.com/material/452/stop-sign-2.png',
                        info1 : 'Código:',
                        info2 : 'Nome:',
                        info3 : 'Localização:'
                    }
                })
            }

            fetchedData();

        }else{

            const fetchedBus = async () => {
                const fetchBus = await posJson();
                setMapData({
                    info : termo,
                    busPos : fetchBus,
                    searchData : {
                        icon :  'https://image.freepik.com/free-icon/bus_318-2038.jpg',
                        info1 : 'Ônibus:',
                        info2 : 'Origem:',
                        info3 : 'Destino'
                    }
                })   
            }
            fetchedBus();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return(<Form onSubmit={(e) => (
        // eslint-disable-next-line no-sequences
        e.preventDefault(),
        setSearch(
            {termo: e.target.elements.controlSelect2.value,
             option: e.target.elements.controlSelect1.value
            }
        ))}>
            <Form.Group controlId="controlSelect1">
                <Form.Label>Selecione opção de busca:</Form.Label>
                    <Form.Control as="select" >
                        <option>Ônibus</option>
                        <option>Paradas</option>
                    </Form.Control>
            </Form.Group>
            <Form.Group controlId="controlSelect2">
                <Form.Label>Digite o endereço da parada:</Form.Label>
                    <Form.Control type="text">
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FormData;