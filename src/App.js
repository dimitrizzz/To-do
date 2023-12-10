import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput.trim(),
      };
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  };

  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedTodo.trim();
      setList(updatedList);
    }
  };

  return (
    <div className="app-container">
      <div className="app-title">TODO LIST</div>
      <hr />
      <div className="input-container">
        <input
          placeholder="add item..."
          value={userInput}
          onChange={(e) => updateInput(e.target.value)}
        />
        <button onClick={addItem} >ADD</button>
      </div>
      <div className="list-container">
        {list.map((item, index) => (
          <div key={index} className="list-item">
            <span>{item.value}</span>
            <div>
              <button onClick={() => deleteItem(item.id)} style={{backgroundColor:"red"}}>Delete</button>
              <button onClick={() => editItem(index)} style={{backgroundColor:"light blue"}}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
