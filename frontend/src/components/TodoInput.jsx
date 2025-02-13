import { useState } from 'react';

export default function TodoInput({ setTodos }) {
  const [todoValue, setTodoValue] = useState('');

  const handleAddTodo = async () => {
    const trimmedValue = todoValue.trim();
    if (trimmedValue === '') return; // Prevent adding empty todos

    try {
      const response = await fetch('http://localhost:5000/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: trimmedValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      const newTodo = await response.json();
      setTodos((prevTodos) => [...prevTodos, newTodo]); // Update UI with new todo
      setTodoValue(''); // Clear input after adding
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter todo..."
      />
      <button onClick={handleAddTodo}>Add</button>
    </header>
  );
}


// import React from "react";

// export default function TodoInput({ handleAddTodos, todoValue, setTodoValue }) {
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAddTodos(todoValue);
//       setTodoValue("");
//     }
//   };

//   return (
//     <header>
//       <input
//         value={todoValue}
//         onChange={(e) => setTodoValue(e.target.value)}
//         onKeyDown={handleKeyDown}
//         placeholder="Enter todo..."
//       />
//       <button
//         onClick={() => {
//           handleAddTodos(todoValue);
//           setTodoValue("");
//         }}
//       >
//         Add
//       </button>
//     </header>
//   );
// }

//Take 2 code:
// import { useState } from "react";

// export default function TodoInput({ setTodos }) {
//   const [title, setTitle] = useState("");

//   const handleAddTodo = () => {
//     fetch('http://localhost:5000/api/todos', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title })
//     })
//       .then(response => response.json())
//       .then(newTodo => {
//         setTodos(prev => [...prev, newTodo]);
//         setTitle("");
//       })
//       .catch(error => console.error('Error adding todo:', error));
//   };

//   return (
//     <header>
//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         placeholder="Enter todo..."
//       />
//       <button onClick={handleAddTodo}>Add</button>
//     </header>
//   );
// }


//take 1 code:
// import { useState } from "react";

// export default function TodoInput(props) {
//     const { handleAddTodos, todoValue, setTodoValue } = props;

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             handleAddTodos(todoValue);
//             setTodoValue("");
//         }
//     };
//     function handleAddTodos(newTodo) {
//         fetch('http://localhost:5000/todos', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ task: newTodo })
//         })
//           .then((response) => response.json())
//           .then((data) => setTodos((prev) => [...prev, data]))
//           .catch((error) => console.error('Error adding todo:', error));
//       }
      
//     return (
//         <header>
//             <input
//                 value={todoValue}
//                 onChange={(e) => setTodoValue(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Enter todo..."
//             />
//             <button
//                 onClick={() => {
//                     handleAddTodos(todoValue);
//                     setTodoValue("");
//                 }}
//             >
//                 Add
//             </button>
//         </header>
//     );
// }
