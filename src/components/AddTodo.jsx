import {useState} from 'react';

function AddTodo() {
    // we used a react hook called useState, to hold the value in our todo input
    const [todoText, setTodoText] = useState("")
    // to check if the local storage has an array with a key called todo items 
    // if it has, save it to an array called todoArray else create an empty array
    let todoArray = JSON.parse(localStorage.getItem('todoItems')) || [] 

    function addTodo(e){
        e.preventDefault()
        // create an object that has 2 keys - todo text and ID
        let todoObject = {
            todoText, id:Date.now()
        }
        // after creating the object, push it into the todo array
        todoArray.push(todoObject)
        // save it into the local storage
        localStorage.setItem('todoItems', JSON.stringify(todoArray))
        // reload page to update the UI
        window.location.reload()
    }

    return (
        <div className='addTodo'>
            <form onSubmit={addTodo}>
                {/* used the onchange event handler to set the value of the todo text */}
                <input type="text" onChange={(e) => setTodoText(e.target.value)} placeholder='Enter Task...' id="" required />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default AddTodo;