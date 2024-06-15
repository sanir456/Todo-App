import { RecoilRoot } from "recoil"
import CreateTodo from "./components/CreateTodo"
import FilterTodos from "./components/FilterTodos"
import Todos from "./components/Todos"

function App() {
  return <div>
    <RecoilRoot>
      <CreateTodo></CreateTodo>
      <FilterTodos></FilterTodos>
      <Todos></Todos>
    </RecoilRoot>
  </div>
}

export default App
