import React from "react";
import { Form, Button } from "react-bootstrap";
import * as linhas from "../data/linhas.json";

function FormData(){

    function searchParams(event){
        event.preventDefault();
        console.log(event.target.elements.controlSelect2.value);
    }

    return(<Form onSubmit={(e) => searchParams(e)}>
            <Form.Group controlId="controlSelect1">
                <Form.Label>Selecione a linha:</Form.Label>
                <Form.Control as="select">
                {linhas.default.map(item => (
                    <option key={item.cl} value={item.cl}>{item.cl}</option>
                ))
                }
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="controlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select">
                <option>Ônibus</option>
                <option>Estações</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FormData;