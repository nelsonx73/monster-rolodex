import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './search-box/search-box.component';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      searchField: ''
    };

    // (1) Replace by arrow function
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // (1) Replace by arrow function
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder="searh monster"
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
