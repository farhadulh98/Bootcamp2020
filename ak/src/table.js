import React, { Component } from 'react'
const TableHeaderrr = () =>{
    return (
    <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      )
}
const TableBod = props =>
{
    const rowss = props.CaaD.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        )
      })
    

    return (
        
    <tbody>{rowss}
    </tbody>
    )
}
class ATable extends Component 
{
    
  render()  {
      const { CaaD } = this.props
    return (
      <table>
          <TableHeaderrr></TableHeaderrr>
        <TableBod CaaD={CaaD}>
          
        </TableBod>
      </table>
    )
  }
}

export default ATable