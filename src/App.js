import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //Calls underlying constructor method

    this.state = {
      name: {fisrtName: 'Beck', lastName: 'Bartleson'},
      company: 'Gitsies'
    }
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name.fisrtName} {this.state.name.lastName}, I work at {this.state.company}.
        </p>
        <button onClick={() => {
          this.setState(() => {
            return {
              name: {fisrtName: 'Ali', lastName: 'Hernandez'}
            }
          }, () => {
            console.log(this.state)
          })
        }}>Change Name</button>
      </header>
    </div>
  );
}
}

export default App;
