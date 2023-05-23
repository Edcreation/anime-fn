import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Login = lazy(() => import("./Login"))
const SignUp = lazy(() => import("./SignUp"))

function MainAuth() {

  return (
    <div className=" w-full h-screen py-10 flex justify-center items-start bg-neutral-400 dark:bg-gray-500">
        <Routes>
            <Route path='/login' element={ <Login /> }></Route>
            <Route path='/signup' element={ <SignUp /> }></Route>
        </Routes>
    </div>
  )
}

export default MainAuth