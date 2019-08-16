import React from 'react';
import Main from './Main';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export default function Table () {
    const columns = [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Status',
            accessor: 'status'
        }
    ];

    const data = [
        {
            name: 'Tanner Linsley',
            status: 1,
        },
        {
            name: 'Geovana Sturt',
            status: 0,
        }
    ];    
    return (        
        <Main title="Table">
            <>                
                <div className="mt-2">
                    <ReactTable 
                        data={data}
                        columns={columns} 
                        resolveData={r => r.map((item) => {
                            return {...item, status:item.status===1?'Ativo':'Desativado'};
                        })}
                    />
                </div>
            </>
        </Main>        
    )
}