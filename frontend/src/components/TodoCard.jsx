import React, { useState } from 'react';

export default function TodoCard({ todo, handleDeleteTodo, handleUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleSave = () => {
    if (editedTitle.trim() !== '') {
      handleUpdateTodo(todo._id, editedTitle, todo.completed);
    }
    setIsEditing(false);
  };

  return (
    <li className='todoItem'>
      {isEditing ? (
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
        />
      ) : (
        <p>{todo.title}</p>
      )}

      <div className='actionsContainer'>
        {!isEditing && (
          <button onClick={() => setIsEditing(true)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        )}
        <button onClick={() => handleDeleteTodo(todo._id)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}


// import React from 'react';

// export default function TodoCard({ todo, handleDeleteTodo, handleToggleComplete }) {
//   return (
//     <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
//       <p>{todo.title}</p>
//       <div className='actions'>
//         <button onClick={() => handleToggleComplete(todo._id, todo.completed)}>
//           {todo.completed ? 'Undo' : 'Complete'}
//         </button>
//         <button onClick={() => handleDeleteTodo(todo._id)}>
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// }

//Take two code:
// import React from 'react';

// export default function TodoCard({ todo, handleDeleteTodo, handleEditTodo }) {
//   return (
//     <li className='todoItem'>
//       <p>{todo.title}</p>
//       <div className='actionsContainer'>
//         <button onClick={() => handleEditTodo(todo._id)}>Edit</button>
//         <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
//       </div>
//     </li>
//   );
// }

//Take one code:
// import React from 'react'

// export default function TodoCard(props) {
//     const { children, handleDeleteTodo, index, handleEditTodo } = props
//     return (
//         <li className='todoItem' >
//             {children}
//             <div className='actionsContainer'>
//                 <button onClick={() => {
//                     handleEditTodo(index)
//                 }}>
//                     <i className="fa-solid fa-pen-to-square"></i>
//                 </button>
//                 <button onClick={() => {
//                     handleDeleteTodo(index)
//                 }}>
//                     <i className="fa-regular fa-trash-can"></i>
//                 </button>
//             </div>
//         </li>
//     )
// }