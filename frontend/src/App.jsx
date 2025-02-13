// import React, { useState, useEffect } from 'react';
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/todos')
//       .then((response) => response.json())
//       .then((data) => setTodos(data))
//       .catch((error) => console.error('Error fetching todos:', error));
//   }, []);

//   const handleAddTodo = (newTodo) => {
//     fetch('http://localhost:5000/todos', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: newTodo }),
//     })
//       .then((response) => response.json())
//       .then((data) => setTodos((prev) => [...prev, data]))
//       .catch((error) => console.error('Error adding todo:', error));
//   };

//   const handleDeleteTodo = (id) => {
//     fetch(`http://localhost:5000/todos/${id}`, {
//       method: 'DELETE',
//     })
//       .then(() => setTodos((prev) => prev.filter((todo) => todo._id !== id)))
//       .catch((error) => console.error('Error deleting todo:', error));
//   };

//   const handleUpdateTodo = (id, title, completed) => {
//     fetch(`http://localhost:5000/todos/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title, completed }),
//     })
//       .then((response) => response.json())
//       .then((updatedTodo) =>
//         setTodos((prev) =>
//           prev.map((todo) => (todo._id === id ? updatedTodo : todo))
//         )
//       )
//       .catch((error) => console.error('Error updating todo:', error));
//   };

//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <TodoInput handleAddTodo={handleAddTodo} />
//       <TodoList
//         todos={todos}
//         handleDeleteTodo={handleDeleteTodo}
//         handleUpdateTodo={handleUpdateTodo}
//       />
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import TodoInput from "./components/TodoInput";
// import TodoList from "./components/TodoList";
// import "./App.css"; // Apply styles here

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [todoValue, setTodoValue] = useState("");

//   // Fetch Todos from Backend
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("http://localhost:5000/api/todos"); // Backend API URL
//         const data = await response.json();
//         setTodos(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   // Add Todo
//   async function handleAddTodos(newTodo) {
//     try {
//       const response = await fetch("http://localhost:5000/api/todos", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: newTodo }),
//       });
//       const savedTodo = await response.json();
//       setTodos([...todos, savedTodo]);
//     } catch (error) {
//       console.error("Error adding todo:", error);
//     }
//   }

//   // Delete Todo
//   async function handleDeleteTodo(id) {
//     try {
//       await fetch(`http://localhost:5000/api/todos/${id}`, {
//         method: "DELETE",
//       });
//       setTodos(todos.filter((todo) => todo._id !== id));
//     } catch (error) {
//       console.error("Error deleting todo:", error);
//     }
//   }

//   // Edit Todo
//   function handleEditTodo(id) {
//     const todoToEdit = todos.find((todo) => todo._id === id);
//     setTodoValue(todoToEdit.text);
//     handleDeleteTodo(id); // Remove old entry
//   }


//   useEffect(() => {
//     if (!localStorage) {
//       return;
//     }

//     let localTodos = localStorage.getItem('todos');
//     if (!localTodos) {
//       return;
//     }

//     localTodos = JSON.parse(localTodos).todos;
//     setTodos(localTodos);

//   }, []);

//   async function fetchData() {
//     const uri = "mongodb://localhost:27017"; // Update with your MongoDB URI
//     const client = new MongoClient(uri);

//     try {
//       await client.connect();
//       const database = client.db("REACTJS-TODOLIST");
//       const collection = database.collection("TO_DO_LIST");
//       const data = await collection.find({}).toArray();
//       console.log(data);
//     } catch (error) {
//       console.error("Error connecting to MongoDB:", error);
//     } finally {
//       await client.close();
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []); // run fetchData only once when component mounts


//   return (
//     <>
//       <TodoInput
//         todoValue={todoValue}
//         setTodoValue={setTodoValue}
//         handleAddTodos={handleAddTodos}
//       />
//       <TodoList
//         handleEditTodo={handleEditTodo}
//         handleDeleteTodo={handleDeleteTodo}
//         todos={todos}
//       />
//     </>
//   );
// }

// export default App;