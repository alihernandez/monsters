import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //Calls underlying constructor method

    this.state = {
      name: 'Beck'
    }
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {this.state.name}.
        </p>
        <button onClick={() => {
          this.setState({name: 'Ali'})
        }}>Change Name</button>
      </header>
    </div>
  );
}
}

export default App;
