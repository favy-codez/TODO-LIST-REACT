import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoContainer() {
  // use the useState hook to create an empty array to populate the data from the local storage into 
  //the array 
  const [todoItems, setTodoItem] = useState([]);
      // to check if the local storage has an array with a key called todo items 
    // if it has, save it to an array called todoArray else create an empty array
  let todoArray = JSON.parse(localStorage.getItem("todoItems")) || [];

  // we use the useEffect hook to fire a function once a page or component renders to prevent multiple re-renders
  useEffect(() => {
    // set the item from the local storage to a local variable called todo items
    setTodoItem(todoArray);
  }, []);

  return (
    <div>
      {/* checking the length of the local storage, if its less than 1, it displays the text - no item to display, else it renders the todo item component. 
      
      after that we pass the todo items to the todo item component as props

      */}
      {todoArray.length ? (
        <TodoItem todoItems={todoItems} />
      ) : (
        <h1 className="noItem">No Item to display</h1>
      )}
    </div>
  );
}

export default TodoContainer;
