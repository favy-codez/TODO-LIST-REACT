import React from 'react';
// we are accepting the props passed from the parent component(todocontainer) to the child components(todoitem)
function TodoItem({todoItems}) {
// a function that deletes an item from the local storage, we got the id, using the id we got the index location of the item in the array and used the splice method to delete the item from the array, then reloaded the page to update the UI
    function deleteTodo(id){
        let index = todoItems.findIndex(todoItem => todoItem.id === id)
        todoItems.splice(index, 1)
        localStorage.setItem('todoItems', JSON.stringify(todoItems))
        window.location.reload()
    }

    return (
        <>
        {/* we mapped through the todo item and rendered a template containing the todo text and the delete icon */}
            {todoItems.map(todoItem => (
                <div className='todo-item' key={todoItem.id}>
                    <p>{todoItem.todoText}</p>
                    <i className="ri-delete-bin-3-fill"onClick={() => deleteTodo(todoItem.id)}></i>
                </div>
            ))}
        </>
    );
}

export default TodoItem;