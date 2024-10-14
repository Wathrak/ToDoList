import { useState, useEffect } from "react";
import './App.css';
import InputField from './components/InputField';
import ListItem from "./components/ListItem";
import SearchBar from "./components/SearchBar";

function App() {
  const [todoList, setTodoList] = useState([]);
  const handlebuttonDelete = (todoToDelete) => {
    const newTodos = todoList.filter(todo => todo !== todoToDelete);
    setTodoList(newTodos);
  }

  useEffect(() => {
    const savedTodos = localStorage.getItem("listItem")
    if (savedTodos) {
      setTodoList(savedTodos.split(","))
    }
  }, [])

  useEffect(() => {
    console.log('Update local storage');
    if (todoList.length !== 0) {
      localStorage.setItem("listItem", todoList)
    }
  }, [todoList])

  useEffect(() => {
    return () => {
      console.log('Component unmount');
    }
  }, )

  const addItem = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div className="App">
      <h1 className="todo-list">To-Do List</h1>
      <SearchBar/>
      <InputField addItem={addItem}/>
      {todoList.map((todo, index) => {
        return (
          <ListItem
            key={index}
            title={todo} 
            onDelete={() => handlebuttonDelete(todo)}/>
        )
      })}
      
    </div>
  );
}

export default App;
