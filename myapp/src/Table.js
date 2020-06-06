import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Slider } from '@material-ui/core';
const THead = () =>{
    return(
    <thead>
        <tr>
            <th>Name</th>
            <th>class</th>
        </tr>    
    </thead>
    )
}
const TBody = props =>{
    const rows = props.characters.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.class}</td>
            <Button variant="outlined" color="secondary">YOOOO</Button>
          </tr>
        )
      })
   return(
   <tbody>{rows}</tbody>
//    <tbody>
//                     <tr>
//                         <td>AK</td>
//                         <td>CS</td>
//                     </tr>
//                     <tr>
//                         <td>Zeeshan</td>
//                         <td>CS</td>
//                     </tr><tr>
//                         <td>Usama</td>
//                         <td>CS</td>
//                     </tr><tr>
//                         <td>Ali</td>
//                         <td>CS</td>
//                     </tr>
//                 </tbody>
   )
}
class Table extends Component{
    render()
    {
        const { characters } = this.props
        return(
           <Container fixed>
               <Typography id="discrete-slider-small-steps" gutterBottom>
  Small steps
</Typography>
<Slider
  defaultValue={0.00000005}
  getAriaValueText={ valuetext   }
  aria-labelledby="discrete-slider-small-steps"
  step={0.00000001}
  marks
  min={-0.00000005}
  max={0.0000001}
  valueLabelDisplay="auto"
/>
           <table>
                <THead></THead>
                <TBody characters = {characters}></TBody>
            </table>
            </Container>
        )
    }
}

export default Table