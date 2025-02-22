import Header from "./header";
import "./App.css";
import AddItem from "./additem";
import { useState } from "react";
import ListItems from "./listitem";
import Footer from "./footer";

function App() {
  const [items, setItems] = useState([]);

  function additemFun(newitem) {
    setItems((items) => [...items, newitem]);
    console.log(newitem);
  }

  function itemSelected(id){
    return setItems((items) => {
      return items.map((item) => {
        return item.id == id ? {...item, selected: !item.selected } : item;
      });
    });
  }

  function deleteItem(id){
    return setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }

  return (
    <div>
      <Header />
      <AddItem additemFun={additemFun} /> 
      <ListItems
      items={items}
      itemSelected={itemSelected}
      deleteItem={deleteItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;