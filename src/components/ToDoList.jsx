import { useSelector } from "react-redux"
import { filterTodos } from "../redux/actions";
import { TodoItem } from "./ToDoItem";


const ToDoList = () => {
    const filteredToDos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchFilter = ( filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL");
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchFilter && matchSearch
        })

    })
    console.log("Filtered Todos:", filteredToDos)
    return(
        <ul>
            <li className="my-2 text-sm italic">All Notes</li>
            {
                filteredToDos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index}/>

                ))
            }
        </ul>
    )
}

export default ToDoList