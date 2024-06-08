export function Todos({todos}) {
    return <div>
        {todos.map((todo) => {
            return <div>
                <h3 style={{margin:10}}>Title      : {todo.title}</h3>
                <h3 style={{margin:10}}>Description: {todo.desc}</h3>
                <button style={{padding:10, margin:10}}>{todo.completed ? "Done!" : "Mark as Done"}</button>
            </div>
        })}
    </div>
}