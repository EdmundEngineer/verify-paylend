import axios from "axios";
const makeHttpRequest = ({ url, json, method, headers, query, timeout, auth }) => {
    return  axios({
        url,
        method,
        auth,
        data: json,
        responseType: 'json',
        headers,
        params: query,
        timeout
      });
  };

export default makeHttpRequest;