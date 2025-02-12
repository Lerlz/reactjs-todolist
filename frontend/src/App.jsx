import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css"; // Apply styles here

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // Fetch Todos from Backend
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/api/todos"); // Backend API URL
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Add Todo
  async function handleAddTodos(newTodo) {
    try {
      const response = await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newTodo }),
      });
      const savedTodo = await response.json();
      setTodos([...todos, savedTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  // Delete Todo
  async function handleDeleteTodo(id) {
    try {
      await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  // Edit Todo
  function handleEditTodo(id) {
    const todoToEdit = todos.find((todo) => todo._id === id);
    setTodoValue(todoToEdit.text);
    handleDeleteTodo(id); // Remove old entry
  }


  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);

  }, []);

  async function fetchData() {
    const uri = "mongodb://localhost:27017"; // Update with your MongoDB URI
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const database = client.db("REACTJS-TODOLIST");
      const collection = database.collection("TO_DO_LIST");
      const data = await collection.find({}).toArray();
      console.log(data);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    } finally {
      await client.close();
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // run fetchData only once when component mounts


  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;