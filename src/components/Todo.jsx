import React from 'react'

const Todo = ({tarea, numero, index, deleteTodo}) => {
    //console.log("Todo de todo: " + todo);
    return(
        <>
            <div className="list">
                <h3>{numero} - {tarea}</h3>
                <br />
                <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
            </div>
        </>
    )
} 
export default Todo