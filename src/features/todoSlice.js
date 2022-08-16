import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //initial state of the todo slice
  count: 0, //intended to be the number of todos, initialized to 0
  todos: [], //intended to be an array of todos, initialized to an empty array
};

export const todoSlice = createSlice({
  //createSlice takes 3 arguments:
  name: "todo", //name of the slice
  initialState, //initial state of the slice
  reducers: {
    //reducers are functions that update the state of the slice
    addTodo: (state, action) => {
      //addTodo is a reducer that adds a todo to the todos array
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
        //If you need more than one argument, you can send the arguments as one object and access it using the payload,  you can use action.payload.variableName
      };
      state.todos.push(todo); //add the todo to the todos array
      state.count++; //increment the count by 1
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //filter the todos array to remove the todo with the id that matches the id of the todo that was removed
      state.count--; //decrement the count by 1
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; //export the actions from the slice
export default todoSlice.reducer; //export the reducer from the slice
