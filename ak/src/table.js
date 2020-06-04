import React, { Component } from 'react'

const TableBod = props =>
{    
   console.log(props)
    const rowss = props.Ca.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <button onClick={() => props.rc(index)}>
              Delete
            </button>
          </tr>
        )
      })

    return (        
    <tbody>
      {rowss}
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
      console.log(this.props)
      console.log("Thus")
      // const { Ca } = this.props
      // console.log({ Ca })

      const  aa  = this.props.Ca
      const  rc  = this.props.removeCharacter
      console.log("Ca")
      // console.log(Ca)
    return (
      
      <table>
          <TableHeaderrr></TableHeaderrr>
        <TableBod Ca={aa} rc = {rc}>
          
        </TableBod>
      </table>
    )
  }
}

export default ATable