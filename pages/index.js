import axios from "axios";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Verified from "./verified";
import Unverified from "./unverified";
import makeHttpRequest from "../services/http"
const VerifyEmailTOken = () => {
 
const [status,setStatus] = useState()
let message = ''
if (status == 200) {message = <Verified/>}
if (status != 200) {message = <Unverified/>}
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');  
   async function verifyEmail () {
     const response = await  makeHttpRequest({
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
   verifyEmail()
}, []);
    return ( 
    <div>
     {message}
    </div>
  
    );
}
 
export default VerifyEmailTOken;