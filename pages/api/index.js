import axios from "axios";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Verified from "./verified";
import Unverified from "./unverified";
const VerifyEmailTOken = () => {
 
const [status,setStatus] = useState()
const message = status == 200 ? <Verified/>: <Unverified/>
 useEffect(() => {
  window.addEventListener("load", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');  
     async function verifyEmail () {
       const response = await  axios({
        url:'https://api.paylend.africa/v2/auth/verify-email?client_secret=003723aa-b23b-4127-bad8-0e41ed051186',
        method:'POST',
        data: {
          token: token
      },
        responseType: 'json'
      })
       setStatus(response.status); console.log(response.status)
       return response
       console.log(token)
     }
});
}, [status]);
    return ( 
    <div>
     {message}
    </div>
  
    );
}
 
export default VerifyEmailTOken;