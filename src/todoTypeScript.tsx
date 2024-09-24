import React, { useState } from "react";
import "./csss/todoTypescript.css";
type Todo = {
  id: number;
  text: string;
  completed: boolean;
  isEditing: boolean;
};

const TodoAppScript: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const[editing,setediting]=useState<false>(false);

  const addTodo = (text: string): void => {
    const newTodo: Todo = { id: Date.now(), text, completed: false,isEditing:false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput("");
  };
  const handleEditChange = (text: string, id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : todo
      )
    );
  };
  const toggleEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
const deleteh = (id: number) => {
  setTodos(
    todos.filter((todo) =>
      todo.id !== id ? { ...todos, } : ""
    )
  );
};

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form className="todo-header" onSubmit={handleFormSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button className="addtodo" type="submit">
          Add Todo
        </button>
      </form>
      <ul>
      {todos.map((todo) => (
          <li key={todo.id}  className={todo.completed ? "completed" : ""}>
            {todo.isEditing ? (
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleEditChange(e.target.value, todo.id)}
              />
            ) : (
              <div onClick={()=>toggleTodo(todo.id)}>{todo.text}</div>
            )}
            <div className="editDeleteTodo">
            <button className="chectodobutton" onClick={() => toggleTodo(todo.id)}>chec</button>
              <button className="edittodobutton" onClick={() => toggleEdit(todo.id)}>Edit</button>
              <button className="deletetodobutton" onClick={()=>deleteh(todo.id)}>del</button>
             
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default TodoAppScript;
