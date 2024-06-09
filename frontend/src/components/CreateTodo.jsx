import { useEffect, useState } from "react"

// async function postTodo(title,desc){    
//     const res = await fetch("http://localhost:3000/todo",{
//         method:"POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             title:title,
//             description:desc
//         })
//     })
//     const json = await res.json()
//     alert(json.msg)

// }
export function CreateTodo({setTodos}) {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3000/todos")
            const json = await res.json()
            console.log(json.allTodos);
            setTodos(json.allTodos)
        }
        setInterval(() => {
            fetchData()
        },5000)
        // fetchData()
    },[])
    return <div>
        <input style={{padding:10, margin:10}} type="text" placeholder="title" onChange={(e) => {setTitle(e.target.value)}}/><br />
        <input style={{padding:10, margin:10}} type="text" placeholder="description" onChange={(e) => {setDesc(e.target.value)}}/><br />
        <button style={{padding:10, margin:10}} onClick={async () => {
            const res = await fetch("http://localhost:3000/todo",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title:title,
                    description:desc
                })
            })
            const json = await res.json()
            
            alert(json.msg)
        }}>Add a todo</button>
    </div>
}
