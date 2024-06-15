import { atomFilter } from "../Store/todos"
import { useSetRecoilState } from "recoil"

export default function FilterTodos() {
    const setFilter = useSetRecoilState(atomFilter)
    
    return <div>
        <input type="text" style={{padding:10, margin:10}} onChange={(e) => {
            setFilter(e.target.value)
        }} placeholder="Apply Filter"></input>
    </div>
}