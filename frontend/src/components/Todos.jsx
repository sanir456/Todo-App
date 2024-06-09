import { useEffect, useState } from "react"

export function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3000/todos")
            const json = await res.json()
            // console.log(json.allTodos);
            setTodos(json.allTodos)
        }
        setInterval(() => {
            fetchData()
        },5000)
        // fetchData()
    },[])

    return <div>
        {todos.map((todo) => {
            return <div key={todo._id}>
                <h3 style={{margin:10}}>Title      : {todo.title}</h3>
                <h3 style={{margin:10}}>Description: {todo.desc}</h3>
                <button style={{padding:10, margin:10}} onClick={async () => {
                    const res =  await fetch("http://localhost:3000/completed",{
                        method:"PUT",
                        headers:{
                            "content-type":"application/json"
                        },
                        body:JSON.stringify({
                            id:todo._id
                        })
                    })
                    const json = await res.json()
                    
                    alert(json.msg)
                }}>{todo.completed ? "Done!" : "Mark as Done"}</button>
            </div>
        })}
    </div>
}