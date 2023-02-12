import React from 'react';

function TodoItem({todoItems}) {

    function deleteTodo(id){
        let index = todoItems.findIndex(todoItem => todoItem.id === id)
        todoItems.splice(index, 1)
        localStorage.setItem('todoItems', JSON.stringify(todoItems))
        window.location.reload()
        console.log(index)
    }
    return (
        <>
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