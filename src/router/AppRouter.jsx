import { Route, Routes } from "react-router-dom"
import { Login } from "../auth"
import { PokeRouters } from "../poke"



export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="/*" element={<PokeRouters/>}/>
        </Routes>
    </>
  )
}
