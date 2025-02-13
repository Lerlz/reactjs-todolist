import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch Todos from API on Component Mount
  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        return response.json();
      })
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  // Add a new todo
  const handleAddTodo = (title) => {
    fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add todo');
        }
        return response.json();
      })
      .then((newTodo) => setTodos((prev) => [...prev, newTodo]))
      .catch((error) => console.error('Error adding todo:', error));
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    fetch(`http://localhost:5000/api/todos/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete todo');
        }
        setTodos((prev) => prev.filter((todo) => todo._id !== id));
      })
      .catch((error) => console.error('Error deleting todo:', error));
  };

  // Update a todo (Edit Title / Mark Complete)
  const handleUpdateTodo = (id, title, completed) => {
    fetch(`http://localhost:5000/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update todo');
        }
        return response.json();
      })
      .then((updatedTodo) =>
        setTodos((prev) =>
          prev.map((todo) => (todo._id === id ? updatedTodo : todo))
        )
      )
      .catch((error) => console.error('Error updating todo:', error));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [todoValue, setTodoValue] = useState("");

//   //Fetches todos from the backend 
//   useEffect(() => {
//     fetch('http://localhost:5000/api/todos')
//       .then(response => response.json())
//       .then(data => setTodos(data))
//       .catch(error => console.error('Error fetching todos:', error));
//   }, []);

//   // Add new todo
//   const handleAddTodos = (newTodo) => {
//     if (!newTodo.trim()) return;

//     fetch('http://localhost:5000/api/todos', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: newTodo })
//     })
//       .then((response) => response.json())
//       .then((data) => setTodos((prev) => [...prev, data]))
//       .catch((error) => console.error('Error adding todo:', error));
//   };

//   // Delete todo
//   const handleDeleteTodo = (id) => {
//     fetch(`http://localhost:5000/api/todos/${id}`, {
//       method: 'DELETE'
//     })
//       .then(() => setTodos((prev) => prev.filter((todo) => todo._id !== id)))
//       .catch((error) => console.error('Error deleting todo:', error));
//   };

//   // Toggle complete
//   const handleToggleComplete = (id, completed) => {
//     fetch(`http://localhost:5000/api/todos/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ completed: !completed })
//     })
//       .then((response) => response.json())
//       .then((updatedTodo) => {
//         setTodos((prev) =>
//           prev.map((todo) => (todo._id === id ? updatedTodo : todo))
//         );
//       })
//       .catch((error) => console.error('Error updating todo:', error));
//   };

//   return (
//     <div className="app-container">
//       <h1>Todo List</h1>
//       <TodoInput
//         handleAddTodos={handleAddTodos}
//         todoValue={todoValue}
//         setTodoValue={setTodoValue}
//       />
//       <TodoList
//         todos={todos}
//         handleDeleteTodo={handleDeleteTodo}
//         handleToggleComplete={handleToggleComplete}
//       />
//     </div>
//   );
// }

// export default App; 

//   return (
//     <div className="app-container">
//       <h1>Todo List</h1>
//       <TodoInput setTodos={setTodos} />
//       <TodoList todos={todos} setTodos={setTodos} />
//     </div>
//   );
// }

// export default App;