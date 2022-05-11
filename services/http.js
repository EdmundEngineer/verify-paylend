import axios from "axios";
const makeHttpRequest = ({ url, data, method, headers,query, timeout, auth }) => {
    return  axios({
        url,
        method,
        auth,
        data: data,
        responseType: 'json',
        headers,
        params: query,
        timeout
      });
  };

export default makeHttpRequest;