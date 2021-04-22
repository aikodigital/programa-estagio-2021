import React from 'react'
import MaterialTable from 'material-table'

export default function Table({data, columns}) {

    return (
        <MaterialTable 
            style={{backgroundColor: "#ccc"}} 
            title="Linhas" 
            data={data} 
            columns={columns} 
            options={{ 
                search: false, 
                paging: false, 
                filtering: false, 
                exportButton: false, 
                headerStyle: { 
                    backgroundColor: '#444', 
                    color: '#ccc'
                }, 
                toolbar: false 
            }} 
        />
    )
}
