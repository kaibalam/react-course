import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"


export const TodoApp = () => {
    const [todoId, setTodoId] = useState( 1 );
    const { data: todo, isLoading } = useGetTodoQuery( todoId );
    // console.log(todo);
    

    const nextTodo = () => {
        setTodoId( todoId + 1); 
    }   
    const prevTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1); 
    }
    return (
        <>
        <h1>Todos - RTK Query</h1>
        <hr/>
        <h4>isLoading{ isLoading ? 'true':'False'}</h4>

        <pre>{ JSON.stringify(todo)  }</pre>

        <button onClick={ prevTodo }>
            Prev Todo
        </button>
        <button onClick={ nextTodo }>
            Next Todo
        </button>

        {/* <ul>
            {
                todos.map( todo => (
                    <li key={todo.id}>
                        <strong> { todo.completed ? 'done':'pending'} </strong>
                        { todo.title}
                    </li>
                ))
            }
        </ul> */}

        

        </>
    )
}
