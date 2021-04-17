import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

export default function TableLinha(props){

  console.log(props);
  
  const columns = [{
    dataField: 'cl',
    text: 'Código da linha'
  }, {
    dataField: 'tp',
    text: 'Term. principal / Term. Sec'
  }, {
    dataField: 'ts',
    text: 'Term. Sec / Term. principal'
  },{
    dataField: 'lt',
    text: 'Letreiro'
  }];

  return <BootstrapTable keyField='id' data={ props.dataBus ? props.dataBus : [] } columns={ columns } />

}