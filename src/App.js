import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchString, setSearchString ] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters]= useState(monsters);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchString));
    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchString]);
  const onSearchChange = (event) =>{
    const searchStringField = event.target.value.toLocaleLowerCase();
    setSearchString(searchStringField);
  }
  
  return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex de los jojos</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='jiji monstruos' className='monsters-search-box'/> 
        <CardList monsters={filteredMonsters}></CardList>
        </div>
  )
  
}

export default App;
