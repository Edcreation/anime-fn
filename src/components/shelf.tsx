import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useToken } from '../hooks/auth';

export function NavButtons() {
  return (
    <div className="p-2 mr-2">
        <Link to="/auth/signup" className="mr-2 text-sm underline dark:text-slate-200">Sing Up</Link>
        <Link to="/auth/login" className="p-2 bg-blue-500 dark:text-slate-200">Login</Link>
    </div>
  )
}

const logout = () => {
  localStorage.removeItem('persist:root')
  location.reload()
}

export function NavUserBox() {
  const user = useToken()
  return (
    <div className="p-1 flex rounded-md flex-row items-center justify-center mr-2">
      <p className="text-xs text-slate-100 font-semibold mr-2">{user.username}</p>
      <div style={{
        backgroundImage:
        `url('https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg')`,}}  
      className="w-8 h-8 bg-cover bg-center rounded-full m-1"></div>
        <button data-testid='logout' onClick={logout} className="p-3 text-xs hover:text-red-800 hidden md:block bg-slate-900 text-center text-slate-100"><i className="fa fa-sign-out" aria-hidden="true"></i> Log Out</button>
    </div>
  )
}

export function CommentsFallBack() {
  return (
    <div style={{maxBlockSize: '38rem'}} className="p-2 dark:text-slate-400">
        Please Login to post comments 
    </div>
  )
}

export function LoadingBar() {
  return (
    <div className="bg-blue-500 animate-pulse mb-2 p-1 rounded-sm" role="status">
      <span className="">Loading...</span>
    </div>
  )
}

export function ErrorBar(props: { error: string }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const errorElement = document.getElementById('error');
      if (errorElement) {
        errorElement.style.display = 'none';
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <p id="error" className="p-1 my-1 rounded-sm w-full text-center text-xs md:text-sm bg-red-600 text-slate-200">{props.error}</p>
  )
}
