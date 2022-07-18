import Verified from "./verified";
import Unverified from "./unverified";
import { useEffect, useState } from 'react'
import axios from "axios";
const Message = () => {

    const [status,setStatus] = useState()
const message = status == 200 ? <Verified/>: <Unverified/>
 useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');  
     async function verifyEmail () {
       try{
        const response = await  axios({
          url:'https://api.paylend.africa/v2/auth/verify-email?client_secret=6b249281-da05-4c3e-9c39-75a5a096ed82',
          method:'POST',
          data: {
            token: token
        },
          responseType: 'json'
        })
         setStatus(response.status);
         return response
       }
       catch(err){
        setStatus(err.response.status);
       }
   
      
     }
     verifyEmail()

}, [status]);
    return ( <div>
     {message}
    </div> );
}
 
export default Message;
