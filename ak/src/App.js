import React, { Component } from 'react'
import ATable from './table'
class App extends Component {
  state = {
    characters: [
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
  }
  removeCharacter = index =>{
    const chars  = this.state.characters
    this.setState({
      characters:chars.filter((chars,i) =>{
        return i !== index
      }),
    })
  }
  render() {
    const { characters } = this.state
    // const { charss } = this.state
    console.log("ayy")  
    console.log(characters)

    return (
      <div className='col-xs-12'>      
        <ATable Ca={characters} removeCharacter={this.removeCharacter}></ATable> 
      </div>
    )
  }
}

export default App
