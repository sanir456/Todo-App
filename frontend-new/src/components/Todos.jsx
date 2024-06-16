import { atomTodos, todosAtomFamily, todosSelector } from "../Store/todos";
import { useRecoilState, useRecoilValue } from "recoil"

export default function Todos() {
    const [todos, setTodos] = useRecoilState(atomTodos);
    const filterTodos = useRecoilValue(todosSelector)
  
    return <div>
        {filterTodos.map((todo) => {
            return <Todo key={todo._id} id={todo._id}></Todo>
        })}
    </div>
}


function Todo({id}) {
    const todo = useRecoilValue(todosAtomFamily(id))
    return <div>
        <h3 style={{margin:10}}>Title      : {todo.title}</h3>
        <h3 style={{margin:10}}>Description: {todo.desc}</h3>
        <button style={{padding:10, margin:10}} onClick={async () => {
            const res =  await fetch("http://localhost:3000/completed",{
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    id:id
                })
            })
            const json = await res.json()
            
            alert(json.msg)
        }}>{todo.completed ? "Done!" : "Mark as Done"}</button>
    </div>
}