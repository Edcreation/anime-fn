import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import  { login } from "../redux/features/auth/userLoginSlice";
import { ErrorBar, LoadingBar } from "../components/shelf";
import { useNavigate } from "react-router-dom";



function Login() {
  const userLogin = useAppSelector(state => state.login)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",  
  });
  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value })
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(login(inputValues)).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        navigate(0)
      }
    });
  };

  
  return (
     <form  onSubmit={handleSubmit} className="p-5 rounded-lg border border-gray-600 dark:border-slate-300 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 w-11/12 sm:w-3/5 lg:w-4/12">
       {userLogin.loading && <LoadingBar />}
       {!userLogin.loading && userLogin.error && <ErrorBar error={userLogin.error} />}
       <div className="title text-2xl font-bold w-full text-center " >Login</div>
       <div className="input pt-5">
         <label htmlFor="email" className="text-xl ">Email</label>
         <input data-testid='email-input' type="email" name="email" onChange={(e) => handleChange(e)} value={inputValues.email} className="bg-white mt-2 rounded-md text-gray-900 focus:border-none focus:ring-0 text-sm md:text-lg  block w-full p-2.5  dark:bg-gray-500 dark:placeholder-gray-400 dark:text-white" />
       </div>
       <div className="input pt-5">
         <label htmlFor="password" className="text-xl ">Password</label>
         <input data-testid='password-input' type="password" name="password" onChange={(e) => handleChange(e)} value={inputValues.password} className="bg-white rounded-md mt-2 text-gray-900 focus:border-none focus:ring-0 text-sm md:text-lg   block w-full p-2.5  dark:bg-gray-500 dark:placeholder-gray-400 dark:text-white" />
       </div>
       <p className="w-full text-right py-1"><a href="" className="text-sm text-slate-300">Forgot Password?</a></p>
       <div className="input py-5 flex flex-col md:flex-row items-center justify-center">
         <button data-testid="Login" onClick={handleSubmit} className="w-1/2 text-xs text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700">{userLogin.loading ? <i className="fa fa-spin fa-spinner" aria-hidden="true"></i> : 'Login'}</button>
         <p className="px-2 py-2 md:py-0">OR</p>
         <button className="w-1/2 text-xs text-white bg-green-800 hover:bg-green-700 font-medium rounded-lg text-md px-3 py-2.5 dark:bg-green-900 dark:hover:bg-green-700" disabled>Login with Google</button>
       </div>
     </form>
  )  
}

export default Login