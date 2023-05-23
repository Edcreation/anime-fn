import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ChangeEvent, useState } from "react";
import { signup } from "../redux/features/auth/userSignUpSlice";
import { ErrorBar, LoadingBar } from "../components/shelf";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const userSignUp = useAppSelector(state => state.signup)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [inputValues, setInputValue] = useState({
    email: "",
    username: "",
    password: "",  
  });
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value })
  }
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(signup(inputValues)).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        navigate(0)
      }
    });
  }
  return (
      <form onSubmit={handleSubmit} className="p-5 rounded-lg border border-slate-300 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 w-11/12 sm:w-3/5 lg:w-4/12">
      {userSignUp.loading && <LoadingBar />}
      {!userSignUp.loading && userSignUp.error && <ErrorBar  error={userSignUp.error} />}
        <div className="title text-2xl font-bold w-full text-center " >SignUp</div>
        <div className="input pt-5">
          <label htmlFor="input" className="text-md ">Email</label>
          <input data-testid='email-input' type="email" name="email" onChange={(e) => handleChange(e)} value={inputValues.email} className="bg-white mt-2 rounded-md text-gray-900 focus:border-none focus:ring-0text-sm md:text-lg   block w-full p-2.5  dark:bg-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div className="input pt-5">
          <label htmlFor="input" className="text-md ">User Name</label>
          <input data-testid='username-input' type="text" name="username" onChange={(e) => handleChange(e)} value={inputValues.username} className="bg-white mt-2 rounded-md text-gray-900 focus:border-none focus:ring-0 text-sm md:text-lg   block w-full p-2.5  dark:bg-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div className="input pt-5">
          <label htmlFor="input" className="text-md ">Password</label>
          <input data-testid='password-input' type="password" name="password"  onChange={(e) => handleChange(e)} value={inputValues.password} className="bg-white rounded-md mt-2 text-gray-900 focus:border-none focus:ring-0 text-sm md:text-lg   block w-full p-2.5  dark:bg-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div className="input py-5 flex flex-col md:flex-row items-center justify-center">
          <button className="w-20 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700" disabled={userSignUp.loading}>{userSignUp.loading ? <i className="fa fa-spin fa-spinner" aria-hidden="true"></i> : 'SignUp'}</button>
        </div>
      </form>
  )
  }
  
  export default SignUp