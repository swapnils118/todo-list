import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { addTodo, updateSearchTerm } from "../redux/actions";
import { useDispatch } from "react-redux";
import FilterButton from "./filterButton";
import ToDoList from "./ToDoList";


const Todo = () => {
    const dispatch = useDispatch()
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");


    const handleAddToDo = (text) => {
        dispatch(addTodo(text))

    }

    const handleAddToDoClick = () => {
        if(newTodoText.trim() !== " "){
            handleAddToDo(newTodoText.trim());
            setNewTodoText("")

        }
    }
    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value))
    }
    // console.log(newTodoText);
    return (
        <div className="max-w-4x1 mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2x1 font-bold text-center uppercase" >Your TODO list</h2>

            {/* input text and btn */}
        <div className="flex items-center mb-4">
        <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"/>
        <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={handleAddToDoClick} ><FaPlus />
        </button>
        </div>

        {/* Filter and Search  */}
        <div className="flex items-center justify-between">
            <FilterButton/>


            <div className="flex items-center mb-4">
            <input value={searchTerm} 
            onChange={(e) => handleSearchChange(e.target.value)} 
            type="text" 
            name="addTodoInput" 
            id="addTodoInput" 
            placeholder="Search" 
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"/>
            <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" ><FaSearch />
            </button>

            </div>
            
        </div>
        <ToDoList></ToDoList>

        </div>
    )
        
}

export default Todo