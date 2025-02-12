import { useState } from "react";

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddTodos(todoValue);
            setTodoValue("");
        }
    };
    function handleAddTodos(newTodo) {
        fetch('http://localhost:5000/todos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ task: newTodo })
        })
          .then((response) => response.json())
          .then((data) => setTodos((prev) => [...prev, data]))
          .catch((error) => console.error('Error adding todo:', error));
      }
      
    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter todo..."
            />
            <button
                onClick={() => {
                    handleAddTodos(todoValue);
                    setTodoValue("");
                }}
            >
                Add
            </button>
        </header>
    );
}
