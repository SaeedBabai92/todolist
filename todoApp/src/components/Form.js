import React from "react";


const Form = ( { setInputText, todos, setTodos, inputText, setFieldStatus,fieldStatus,modalHandle,deadlineText,setDeadlineText}) => {
    const inputTextHandler = (e) => {
      //  console.log(e.target.value);
        setInputText (e.target.value);
    };
    const deadlineTextHandler = (e) =>{
      setDeadlineText(e.target.value);
    }
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
          ...todos, 
          {text: inputText, deadline: deadlineText,fieldStatus: fieldStatus,completed: false, id: Math.random() * 1000 },
      ]);

      setInputText("");
      setDeadlineText("");
    };
    const handleStatus= (e) => {
      setFieldStatus(e.target.value);
    }
    return( 
        <form>
           <div>
            <input 
                value = {inputText} 
                onChange = {inputTextHandler} 
                type = "text" 
                className = "todo-input" 
                placeholder="Title"
              />
           </div>
           <div>
            <input 
            
                type="text"
                 placeholder="Deadline" 
                  className = "todo-input" 
                  onChange={deadlineTextHandler}
              />
           </div>
           <div>
            <div className = "select">
                <select onChange = {handleStatus} name="todos" className="filter-todo status-div">
                      <option>Status</option>
                      <option value = "done">Done</option>
                      <option value = "notStarted">Not Started</option>
                      <option value = "inPrograce">In prograce</option>
                    </select>
              </div>
           </div>

            {/* <div className = "select">
                  <select onChange = {statusHandler} name="todos" className="filter-todo">
                    <option value = "all">All</option>
                    <option value = "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option>
                  </select>
            </div> */}
             <div className="custom-btn-group">
              <button onClick = {modalHandle} className="todo-button" type="submit">
                Cancle
              </button>
              <button onClick = {submitTodoHandler} className="todo-button" type="submit">
                  Add
              </button>
             </div>
        </form>
    );
}
export default Form;