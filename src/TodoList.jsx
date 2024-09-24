// TodoList.js
import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setNewTodo,
  setEditingTodo,
  saveTodo,
} from "./actions";
import "./csss/todo.css";

function TodoList({
  todos,
  newTodo,
  editingTodo,
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setNewTodo,
  setEditingTodo,
  saveTodo,
}) {
  console.log("Todos:", todos);
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    } else {
      alert("It can't be empty");
    }
  };

  const handleEditTodo = (id, text) => {
    setEditingTodo(id, text);
  };

  const handleSaveTodo = (id) => {
    if (editingTodo.text.trim()) {
      saveTodo(id, editingTodo.text);
    } else {
      alert("It can't be empty");
    }
  };

  return (
    <div className="todo-list">
      <div className="result">
        <h2 style={{ fontSize: "30px", marginTop: "0" }}>To-Do List</h2>
        <div style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="Add a new to-do..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="add" onClick={handleAddTodo}>
            Add
          </button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {editingTodo.id === todo.id ? (
                <div className="editPart">
                  <input
                  className="editInput"
                    type="text"
                    value={editingTodo.text}
                    onChange={(e) => setEditingTodo(todo.id, e.target.value)}
                  />
                  <button
                    className="save"
                    onClick={() => handleSaveTodo(todo.id)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className={todo.completed ? "completed" : ""}>
                  {todo.text}
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <button className="toggle" onClick={() => toggleTodo(todo.id)}>
                  Toggle
                </button>
                <button
                  className="edit"
                  onClick={() => handleEditTodo(todo.id, todo.text)}
                >
                  Edit
                </button>
                <button className="delete" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  newTodo: state.todos.newTodo,
  editingTodo: state.todos.editingTodo,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setNewTodo,
  setEditingTodo,
  saveTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
