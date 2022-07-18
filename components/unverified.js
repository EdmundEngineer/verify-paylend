import axios from "axios";
import ToastSuccess from './toast-success'
import ToastFailed from './toast-failed'
import Zoom from 'react-reveal/Zoom';
import { useEffect, useState } from 'react'
function Unverified() {
const [status,setStatus] = useState()
const message = status == 200 ? <ToastSuccess/>: <ToastFailed/> 
  const resendVerificatonLink = async () =>  {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email'); 
    const response = await  axios({
     url:'https://api.paylend.africa/v2/auth/send-email-verify-link?client_secret= 6b249281-da05-4c3e-9c39-75a5a096ed82',
     method:'POST',
     data: {
      email
  },
     responseType: 'json'
   })
   setStatus(response.status); console.log(response.status); console.log(email)
  }
  return (
    <>


      <div className='flex items-center flex-col justify-center min-h-screen bg-white sm:bg-gray-100'>
      {message}
        <div className='px-8 py-6 mt-4 text-left bg-white sm:shadow-lg w-full sm:rounded sm:w-1/3'>
          <div className='mb-7 flex justify-center'>
          <Zoom>
         <img src={"/assets/images/unverified.png"} alt='Logo' className='w-50 h-60' /></Zoom>
              {/* <Image className='w-16 h-16'
               src={"/assets/images/verified.png"}
               width={"200px"}
               height={"132px"}
               alt={""}
               layout="responsive"
               objectFit="contain"
               priority={true}
                /> */}
          </div>
          <h3 className='text-xl mb-4 font-medium font-gotham-rounded-medium text-center text-secondary-900'>
            <p>Your email verification link has expired</p>
          </h3>

                  <button 
                 
                  className='bg-primary rounded-md font-body p-2 text-xs font-semibold flex m-auto text-white pl-7 pr-7'
                  onClick={resendVerificatonLink}
                >
                RESEND LINK
                </button>





        
        </div>
      </div>
    </>
  )
}


export default Unverified
