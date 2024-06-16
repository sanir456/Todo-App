import {atom, selector, useRecoilValue} from "recoil"
import Todos from "../components/Todos"

export const atomTodos = atom({
    key:"atomTodos",
    default: selector({
        key:"atomTodos/Default",
        get: async () => {
            const res = await fetch("http://localhost:3000/todos")
            const json = await res.json()
            // console.log(json.allTodos);
            return json.allTodos
        }
    })
})

export const atomFilter = atom({
    key:"atomFilter",
    default:""
})

export const todosSelector = selector({
    key:"todosSelector",
    get: ({get}) => {
        const todos = get(atomTodos)
        const filter = get(atomFilter)
        if(filter == "") {
            return todos
        }
        return todos.filter((todo) => {
            return todo.title.includes(filter) || todo.desc.includes(filter)
        })
    }
})