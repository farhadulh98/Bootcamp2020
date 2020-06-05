import React, { Component } from 'react'
import Table from './table.js'
import Form from "./form.js"

class App extends Component {
  
  state=
  {
    CData: 
    [
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
      }
    ]
  }
  handleSubmit = character => {
    this.setState({ 
      CData: [...this.state.CData, character] })
  }

  removeCharacter = index => {
    const { CData } = this.state
  
    this.setState({
      CData: CData.filter((CData, i) => {
        return i !== index
      }),
    })
  }
  render() {
    // const Cdata = [
    //   {
    //     name: 'Charlie',
    //     job: 'Janitor',
    //   },
    //   {
    //     name: 'Mac',
    //     job: 'Bouncer',
    //   },
    //   {
    //     name: 'Dee',
    //     job: 'Aspring actress',
    //   },
    //   {
    //     name: 'Dennis',
    //     job: 'Bartender',
    //   },
    // ]


    return (
      <div className='container'> 
      <Table CData = { this.state.CData } RemoveFunc={ this.removeCharacter }></Table>     

      <div>
        <Form handle = {this.handleSubmit}>
          
          </Form>
          </div> 
      </div>
      
    )
  }
}

export default App
