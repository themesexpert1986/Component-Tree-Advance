import React, { useState } from "react";
// import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import ListArea from "./ListArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    // setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <ListArea items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
