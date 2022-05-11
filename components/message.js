import Verified from "./verified";
import Unverified from "./unverified";
const Message = () => {
    const [status,setStatus] = useState()
const message = status == 200 ? <Verified/>: <Unverified/>
 useEffect(() => {
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
     verifyEmail()

}, [status]);
    return ( <div>
     {message}
    </div> );
}
 
export default Message;