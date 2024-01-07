import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //Calls underlying constructor method

    this.state = {
      monsters: [],
    };
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    () =>{
      console.log(this.state)
    }
    )
    );
  }

  render() {
    console.log('render')
  return (
    <div className="App">
      {
        this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      }
      {/* <h1>{this.state.monster1.name}</h1>
      <h1>{this.state.monster2.name}</h1>
      <h1>{this.state.monster3.name}</h1> */}
    </div>
  );
}
}

export default App;
