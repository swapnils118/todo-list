
const Todo = () => {
    return (
        <div className="max-w-4x1 mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2x1 font-bold text-center uppercase" >Your TODO list</h2>

            {/* input text and btn */}
        <div className="flex items-center mb-4">
        <input type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"/>
        </div>
        </div>
    )
}

export default Todo