import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';


export default function TablePrev(props){

  console.log(props);

  const columns = [{
    dataField: 'np',
    text: 'Nome da Parada'
  }, {
    dataField: 'cl',
    text: 'Código da linha'
  }, {
    dataField: 'lt0',
    text: 'Letreiro de destino da linha'
  },{
    dataField: 'lt1',
    text: 'Letreiro de origem da linha'
  },{
    dataField: 'p',
    text: 'prefixo do veiculo'
  },{
      dataField: 't',
      text: 'Hora de Chegada'
  }];

  return <BootstrapTable keyField='id' data={ props.dataBus ? props.dataBus : []  } columns={ columns } />

}