import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [ fieldStatus, setFieldStatus ] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);
  const [ deadlineText, setDeadlineText ] = useState("");

  //Run once
  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    setOpenModal(false)
  }, [todos, status]);

  //Functions

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  // Modal control are here
  const modalHandle = () =>{
    setOpenModal(!openModal)
  }

  return (
    <div className="App">
      <div className="modal-parent-div">
            <div>
              <button className="open-modal-button" onClick={modalHandle}>
                Add A New Todo
              </button>
              <div className="massage-div">
                <h4>
                    <span className="done me-3">&nbsp;Done</span>
                    <span className="notStarted me-3">&nbsp;Not Started</span>
                    <span className="inPrograce me-3">&nbsp;In progress</span>
                  </h4>
              </div>
            </div>
            <TodoList
              filteredTodos={filteredTodos}
              setTodos={setTodos}
              todos={todos}
            />
          </div>
          {openModal && <div className="modal-body"> 
            <header>
              <h1>Add New Todo</h1>
            </header>
            
            <Form
              inputText={inputText}
              todos={todos}
              setTodos={setTodos}
              setInputText={setInputText}
              setFieldStatus={setFieldStatus}
              fieldStatus={fieldStatus}
              modalHandle={modalHandle}
              setDeadlineText={setDeadlineText}
              deadlineText={deadlineText}
            />
        </div>  }
        
     
    </div>
  );
}

export default App;
