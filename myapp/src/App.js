import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table.js';

class App extends Component
{
  
  render()
  {
    const characters =[
      
      {
        name : 'AK',
        class : 'CS',
      },
      {
        name : 'Ali',
        class : 'CS',
      },
      {
        name : 'Usama',
        class : 'CS',
      },
      {
        name : 'Zeeshan',
        class : 'CS',
      },
    ]
    return(
      <div>
        <Table characters = {characters}></Table>
       </div> 
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
