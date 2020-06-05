import React , { Component} from 'react';

const Thead = () =>{
    return(
        <thead>
        <th>
            Name
        </th>
        <th>
            Class
        </th>
        </thead>
    )

}
const Tbody = props => {
    const RemoveFunc= props.RemoveFunc;
    const rows = props.CData.map((row,index) =>{
        return(
            <tr>
                <td>
                    {row.name}
                </td>
                <td>
                    {row.job}
                </td>
                <td>
                <button onClick={() => props.RemoveFunc(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    
    
  
    return <tbody>{rows}</tbody>
  }
    
class Table extends Component
{
    
    render()
    
    {
        const  CData = this.props.CData;
        const RemoveFunc = this.props.RemoveFunc;
        
        return(
            <table>
                <Thead></Thead>
                <Tbody CData = {CData} RemoveFunc={RemoveFunc}></Tbody> 
            </table>
        );
    }
}

export default Table;