import { Routes, Route, Link } from "react-router-dom"
import { Todo } from "./pages/todo/todo"
import { User } from "./pages/user/user"



function App() {
  

  return (
    <div className="container">
      <div className="mb-10 flex gap-3">
        <Link className="px-5 py-2 bg-lime-200" to={"/"}>Todo</Link>
        <Link className="px-5 py-2 bg-lime-200" to={"/user"}>User</Link>
      </div>
      <Routes>
          <Route path="/" element={<Todo/>}/>
          <Route path="/user" element={<User/>}/>
      </Routes>
    </div>
  )
}

export default App
