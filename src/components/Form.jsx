import React, { useState } from 'react'
import Todo from '../components/Todo'

const Form = () => {
    const [numero, setNumero] = useState('');
    const [tarea, setTarea] = useState('');
    const [todos, setTodos] = useState([]);


    const handleChange = e => setTarea(e.target.value)
    const numeros = e => setNumero(e.target.value)

    const handleClick = e => {
        console.log(tarea + numero);
        let todo = {
            tarea: tarea, 
            numero: numero
        }

        if (todo.numero.trim() === '' || todo.tarea.trim() === '') {
            alert('Los campo no puede estar vacio')
            return
        }
        if (todo.numero < 1) {
            alert('La cantidad debe ser mayor a cero')
            return
        }

        setTodos([...todos, todo])
        console.log(todo)
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return(
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br/>
                <input type="text" name="todo" onChange={handleChange}></input>
                <input type="number" name="todo" onChange={numeros}/>
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                todos.map((value, index) => (
                    <Todo tarea={value.tarea} numero={value.numero} key={index} index={index} deleteTodo={deleteTodo} />
                ))
            }
        </>
    )
}
export default Form