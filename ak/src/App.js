import React, { Component } from 'react'
import ATable from './table'
class App extends Component {
  render() {
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
    return (
      <div className='container'>
      
        <ATable CaaD={characters}></ATable> 
      </div>
    )
  }
}

export default App
