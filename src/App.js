import './App.css';
import {useState} from 'react';
import { Header } from './component/Header';
import { Content } from './component/Content';
import { Footer } from './component/Footer';
import { AddItem } from './component/AddItem';
import { SearchItem } from './component/SearchItem';



function App() {

  const [items, setItems] = useState(

    //Another formate of local storage to referesh the modules using in state Method.
    //(JSON.parse(localStorage.getItem('todo_list')));
    [
        {
            id : 1,
            checked : true,
            item : "Practice Coding"
        },
        {
            id : 2,
            checked : false,
            item : "Reading"
        },
        {
            id : 3,
            checked : true,
            item : "Playing Cricket"
        }
    ]);

    const [newItem, setNewItem] = useState('')

    const [search, setSearch] = useState ('')

    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id +1 : 1;
      const addNewItem = {id, checked:false, item}
      const listItems = [...items, addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))

    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => 
        item.id===id ? {...item, checked:!item.checked}: item)
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => 
        item.id!==id)
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newItem) return;
        console.log (newItem)
        addItem(newItem)
        setNewItem('')
    }

  
return (
  <div>
      <Header title = "Shanjai"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />

    <SearchItem 
      search = {search}
      setSearch = {setSearch}
    />
   
      <Content 
        items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer 
        length = {items.length}
      />
  </div>
  ) 
}

export default App;
