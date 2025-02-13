import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList({ todos, handleDeleteTodo, handleUpdateTodo }) {
  return (
    <ul className='main'>
      {todos.map((todo) => (
        <li key={todo._id} className={`todoItem ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleUpdateTodo(todo._id, todo.title, !todo.completed)}
          />
          <TodoCard
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
        </li>
      ))}
    </ul>
  );
}


// import React from 'react';
// import TodoCard from './TodoCard';

// export default function TodoList({ todos, handleDeleteTodo, handleToggleComplete }) {
//   return (
//     <ul className='todo-list'>
//       {todos.map((todo) => (
//         <TodoCard
//           key={todo._id}
//           todo={todo}
//           handleDeleteTodo={handleDeleteTodo}
//           handleToggleComplete={handleToggleComplete}
//         />
//       ))}
//     </ul>
//   );
// }

//Take two code:
// import React from 'react';
// import TodoCard from './TodoCard';

// export default function TodoList({ todos, setTodos }) {
//   const handleDeleteTodo = (id) => {
//     fetch(`http://localhost:5000/api/todos/${id}`, {
//       method: 'DELETE'
//     })
//       .then(() => setTodos(prev => prev.filter(todo => todo._id !== id)))
//       .catch(error => console.error('Error deleting todo:', error));
//   };

//   return (
//     <ul className='main'>
//       {todos.map(todo => (
//         <TodoCard key={todo._id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
//       ))}
//     </ul>
//   );
// }


//Take one code:
// import React from 'react'
// import TodoCard from './TodoCard'

// export default function TodoList(props) {
//     const { todos } = props


//     return (
//         <ul className='main'>
//             {todos.map((todo, todoIndex) => {
//                 return (
//                     <TodoCard {...props} key={todoIndex} index={todoIndex}>
//                         <p>{todo}</p>
//                     </TodoCard>
//                 )
//             })}
//         </ul>
//     )
// }