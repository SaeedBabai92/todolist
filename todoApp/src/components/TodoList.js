import React from "react";
import Todo from "./Todo";

//const TodoList = ({todos})=>([]) =>{
//const TodoList =({ todos }) => {
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  console.log(todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            fieldStatus={todo.fieldStatus}
            todosDeadline={todo.deadline}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
