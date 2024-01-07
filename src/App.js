import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super(); //Calls underlying constructor method

    this.state = {
      monsters: [],
      searchField: '',
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    console.log("render");

    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      //returns 'true' if name includes the search string
      //if returns 'true' keep monster in array if not get rid of it 
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox onChangeHandler={ onSearchChange} placeholder="search monsters" className="search-box"/>
        <CardList monsters={ filteredMonsters }/>
      </div>
    );
  }
}

export default App;
