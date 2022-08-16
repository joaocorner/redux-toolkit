import "./App.css";
import TodoItem from "./components/TodoItem";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch(); //function that will be used to run addTodo and removeTodo functions

  const handleAddTodo = (e) => {
    //function that will be triggered when the form is submitted
    e.preventDefault(); //prevents the default behavior of the form, which is to refresh the page, and the state will be reset
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    //it will be triggered it when the user clicks on a todo item. The id of the todo will be used to identify which todo is removed.
    dispatch(removeTodo(id));
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <input type="text" onInput={(e) => setInput(e.target.value)} />
        <button type="submit">+</button>
      </form>
      <div className="Todos">
        {count > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo.text}
              id={todo.id}
              onCheck={handleTodoDone}
            />
          ))}
        {count === 0 && <p>No todos yet</p>}
      </div>
    </div>
  );
}

export default App;
