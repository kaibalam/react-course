import { TodoList, TodoAdd } from "./index"
import { useTodos } from "../hooks/useTodos"


export const TodoApp = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCoun }  = useTodos();


    return (
        <>
            <h1>TodoApp { todosCount },<small>pendientes:  { pendingTodosCoun }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* Todo list */}
                    <TodoList 
                    todos={todos} 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo } 
                    />
                    {/* Todo list */}
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                    {/* Fin TodoAdd */}
                </div>
            </div>


        </>

    )
}
