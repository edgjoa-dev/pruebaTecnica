import { useEffect, useState } from "react";
import { getItems } from "./api/getItems";
import { SearchBox } from "./components/SerachBox";
import { UserSearch } from "./components/UserSearch";
import './App.css'


export const App = () => {

  const [item, setItem] = useState([])
  const [filterName, setFilterName] = useState([])

  useEffect( ()=>{
    getItems().then( (data) =>{
      setItem(data);
      setFilterName(data)
    })
  }, [])

  const filterUsers = (searchString) =>{
    const filtered = item.filter( (user) => (user.name.first).includes(searchString));
    setFilterName(filtered);
  }

  return (
    <div className="App">
      <SearchBox handleChange={filterUsers}/>
      {
        filterName.length === 0
        ?
          <p> No Match </p>
        :
        filterName.map( (items) => (
          <UserSearch name={items.name.first}/>
          ))
      }
    </div>
  );
}