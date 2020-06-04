import React, { Component } from 'react'

const TableBod = props =>
{
    
    const rowss = props.Ca.map((row, index) => {
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

class ATable extends Component 
{
  
  render()  {
      // console.log(this.props.Ca)
      // console.log("Thus")
      // const { Ca } = this.props
      // console.log({ Ca })
      const { Ca } = this.props
    return (
      
      <table>
          <TableHeaderrr></TableHeaderrr>
        {/* <TableBod Caa={Ca}> */}
        <TableBod Ca={Ca}>
          
        </TableBod>
      </table>
    )
  }
}

export default ATable