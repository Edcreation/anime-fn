import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Spinner } from "./components"
import { isLoggedIn } from './Authentication/isLoggedIn';

const Home = lazy(() => import("./Pages/Home/Home"))
const Browse = lazy(() => import("./Pages/Browse/Browse"))

const MainAuth = lazy(() => import("./Authentication/MainAuth"))

const SinglePage = lazy(() => import("./Pages/Single/SinglePage"))

function App() {
  // let isLoggedIn = false
  // const token = store.getState().login.token || store.getState().signup.token
  // if (token) {
  //   isLoggedIn = true
  // }
  return (
    <div className=" bg-slate-900 absolute left-0 right-0 h-max">
      <Navbar/>
      <Suspense fallback={ <Spinner /> }>
        <Routes>
          <Route path='/browse/*' element={ <Browse /> }></Route>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/auth/*' element={ isLoggedIn() ? <Home /> : <MainAuth /> }></Route>
          <Route path='/single/:id' element={ <SinglePage /> }></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App