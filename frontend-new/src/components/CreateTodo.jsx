import { useState } from "react"

export default function CreateTodo() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    
    return <div>
        <input type="text" style={{padding:10, margin:10}} onChange={(e) => setTitle(e.target.value)} placeholder="Input title..."></input>
        <input type="text" style={{padding:10, margin:10}} onChange={(e) => setDesc(e.target.value)} placeholder="Input Description"></input>
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
        }}>Add Todo</button>
    </div>

}