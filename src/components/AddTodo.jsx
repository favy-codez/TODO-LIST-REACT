import {useState} from 'react';

function AddTodo() {

    const [todoText, setTodoText] = useState("")
    let todoArray = JSON.parse(localStorage.getItem('todoItems')) || []

    function addTodo(e){
        e.preventDefault()
        let todoObject = {
            todoText, id:Date.now()
        }
        todoArray.push(todoObject)
        localStorage.setItem('todoItems', JSON.stringify(todoArray))
        window.location.reload()
    }

    return (
        <div className='addTodo'>
            <form onSubmit={addTodo}>
                <input type="text" onChange={(e) => setTodoText(e.target.value)} placeholder='Enter Task...' id="" />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default AddTodo;