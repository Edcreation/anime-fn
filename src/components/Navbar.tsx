import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/navbar.styles.scss"
import { NavButtons, NavUserBox } from "./shelf"
import { ProtectedComponent } from "./Protected"
import { isAuthenticated } from "../Authentication/isLoggedIn"

function Navbar() {
  const [nav, setNav] = useState(false)
  const logout = () => {
    localStorage.removeItem('persist:root')
    location.reload()
  }
  return (
    <nav className="bg-gray-200 w-full flex flex-col border-slate-700 dark:bg-blue-900" >
      <div className="flex flex-wrap w-full justify-between items-center mx-auto max-w-screen-xl py-2">
        <Link to="/" className="flex pl-3 items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Anime</span>
        </Link>
        <div className="max-w-screen-xl px-2 py-3 mx-auto hidden md:block">
          <div className="flex items-center w-full">
              <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                  <li>
                      <Link  to="/" className="font-semibold text-gray-900 dark:text-white ">Home</Link>
                  </li>
                  <li>
                      <Link  to="/browse" className="font-semibold text-gray-900 dark:text-white ">Browse</Link>
                  </li>
              </ul>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center pr-5">
          <ProtectedComponent isLoggedIn={isAuthenticated()} fallback={ <NavUserBox/> }><NavButtons /></ProtectedComponent>
          <button data-testid='open-nav' className="w-10 h-10 bg-slate-300 dark:bg-blue-700 text-white dark:text-black rounded-full md:hidden" onClick={() => setNav(!nav)} >{nav ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i> }</button>
        </div>
      </div>
      <div className={`max-w-screen-xl w-full items-center right-0 top-20 md:hidden bg-slate-300 dark:bg-slate-500 mx-auto ${nav ? 'flex': 'hidden' }  z-10`}>
        <div className='flex flex-col w-full font-medium items-center justify-center text-sm'>
          <Link  to="/" className="font-semibold w-full text-center py-3 dark:border-slate-400 border-b-2 text-gray-900 dark:text-white ">Home</Link>
          <Link  to="/browse" className="font-semibold w-full text-center py-3 dark:border-slate-400 border-b-2 text-gray-900 dark:text-white ">Browse</Link>
          <button data-testid='logout' onClick={logout} className="p-3 text-xs hover:text-red-800 my-1 md:hidden bg-slate-900 text-center text-slate-100"><i className="fa fa-sign-out" aria-hidden="true"></i> Log Out</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar