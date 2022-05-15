import Zoom from 'react-reveal/Zoom';
import ToastResetSuccess from './toast-reset-success'
import ToastFailed from './toast-failed'
import { useEffect,useState } from 'react'
import axios from "axios";
const ResetPassword = () => {
  const [state, setState] = useState({
    password: "",
    confirm_password: ""
  });
  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const [status,setStatus] = useState()
let message = ''
if(status == 200) {
  message = <ToastResetSuccess></ToastResetSuccess>
}
if(status == 404) {
  message = <ToastFailed></ToastFailed>
}
if(status == 400) {
  message = <ToastFailed></ToastFailed>
}
if(status == 500) {
  message = <ToastFailed></ToastFailed>
}
  const submitForm = async (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');  
      console.log({
        password: state.password,
        confirm_password: state.confirm_password,
        token:token
   });
       await  axios({
        url:'https://api.paylend.africa/v2/auth/reset-password?client_secret=003723aa-b23b-4127-bad8-0e41ed051186',
        method:'PUT',
        data:{
          password: state.password,
          confirm_password: state.confirm_password,
          token:token
     },
        responseType: 'json'
      }).then((response) => {
       setStatus(response.status);
       console.log(response)
      })
      .catch((err) => {
        setStatus(err.response.status); 
        console.log(message)
        console.log(err.response)
      });
     }
    return ( <>


        <div className='flex items-center flex-col justify-center min-h-screen bg-white sm:bg-gray-100'>
        {message}
        <form onSubmit={submitForm} className="px-8 py-6 mt-4 text-left bg-white sm:shadow-lg w-full sm:rounded sm:w-1/3"> 
        <div className='mb-0 flex justify-center'>
          <Zoom>
            <img src={"/assets/images/logo-2.png"} alt='Logo' className='object-scale-down h-48 w-96' /></Zoom>
    
          </div>
          <div className="mb-6">
              <h1 className="text-secondary-900 font-bold text-4xl text-center">Reset Password</h1>
          </div>

  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New password</label>
    <input onChange={handleChange} minLength="8" type="password"  name="password"  placeholder="New Password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
  </div>
  <div className="mb-6">
    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
    <input  onChange={handleChange} minLength="8" type="password"   name="confirm_password" placeholder="Confirm Password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></input>
  </div>
  <button type="submit" className="flex m-auto text-xs font-semibold  text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Password</button>
</form>
        </div>
      </>);
}
 
export default ResetPassword;