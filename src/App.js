import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))

  }



  render(){
    const {searchField, monsters} = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={e=>this.setState({searchField: e.target.value},()=>console.log(this.state))}        />
        <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}

export default App;
