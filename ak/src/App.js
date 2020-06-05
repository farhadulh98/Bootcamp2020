import React, { Component } from 'react'
class App extends Component {
  
    

  render() {


    return (
      <div className='col-xs-12'>      
        <ATable Ca={characters} removeCharacter={this.removeCharacter}></ATable> 
        <Form/>
      </div>
    )
  }
}

export default App
