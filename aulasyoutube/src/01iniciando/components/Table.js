import React from 'react';

function Table({table})  {    
    return (            
        <tr>            
            <td>{table.nome}</td>
            <td>{table.cpf}</td>
        </tr>            
    );
    
}

export default Table;
