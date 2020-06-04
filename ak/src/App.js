import React, { Component } from 'react'
import ATable from './table'
class App extends Component {
  render() {
    
    console.log("From app")


    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    
    console.log("From app")
    console.log({characters})
    return (
      <div className='container'>      
        <ATable Ca={characters}></ATable> 
      </div>
    )
  }
}

export default App
