import React , { Component } from 'react'

class Form extends Component
{
    initialState = 
    {
        name: " ",
        job: " ",
    }
    state=this.initialState;
    handleChange = event => {
        const { name, value } = event.target
      
        this.setState({
          [name]: value,
        })

        
      }

      Submitdata = () =>{
        this.props.handle(this.state);
        this.setState(this.initialState);
    }
    render()
    {

        const {name,job} = this.state;
        

        return(
            <form>
                <input placeholder="Enter Name" value={name} onChange={this.handleChange} name="name" id="name" type="text" ></input>
                <input placeholder="Enter Job" value={job} onChange={this.handleChange} type="text" name="job" id="job"></input>
                <input type="button" value="Submit" onClick={this.Submitdata} />
            </form>
        );
    }
}
export default Form