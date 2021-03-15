// all imports
import './App.css';
import React, {Component} from 'react'; //disconstructing sth like that without that e must use React.Component in export
import { CardList } from './components/card-component/card-list-c';
import { SearchBox } from './components/search-box/search-box';

// component - pozala nam użyać component life cycles
class App extends Component {
  constructor(){
    super();
    this.state = {
        monsters: [],
        searchField: ''
    };
  }

  //when add elements do dom it's run
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())//promise
    // .then(users => console.log(users))
    .then(users => this.setState({ monsters: users }));
    
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }

  render(){
    const { monsters, searchField } = this.state; //const monsters = this.state.monsters
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
