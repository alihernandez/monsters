import { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super(); //Calls underlying constructor method

    this.state = {
      monsters: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <input
          className="serach-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const serachString = event.target.value.toLowerCase();

            const filteredMonsters = this.state.monsters.filter((monster) => {
              //returns 'true' if name includes the search string
              //if returns 'true' keep monster in array if not get rid of it 
              return monster.name.toLowerCase().includes(serachString);
            });

            this.setState(() => {
              return { monsters: filteredMonsters };
            })
          }}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
