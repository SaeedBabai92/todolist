import React from "react";

const Todo = ( {text, todo, todos, setTodos,todosDeadline,fieldStatus }) => {
    // console.log(text, todo, todos, setTodos)
    console.log(fieldStatus)
    const deleteHandler = () => {
      setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos (
            todos.map((item) => {
            if (item.id === todo.id){
                return {
                    ... item, 
                    completed: !item.completed
                };
            }
                return item;
            })
        );
        
    };
    return (
        <div className={`todo ${fieldStatus}`}>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
              {text}
              <h6>Deadline: {todosDeadline} </h6>
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className = "trash-btn" >
              <i className = "fas fa-trash" ></i>
            </button>
        </div>

    );
};
export default Todo;