import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../cookie";
import store, { login, logout } from "../redux_store/userSlice";


const JWT_EXPIRRY_TIME = 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

const loginDB = (values, navigate) => {
  axios.post(`/login`, values, { withCredentials: true })
    .then(response => {
      onLoginSuccess(response)
      store.dispatch(login({email:values.email}))
      navigate("/calendar");
    }) 
    . catch(error => {
      console.log(error);
    })
  }

  const logoutDB = (navigate) => {
    store.dispatch(logout());
    navigate("/");
    
    deleteCookie("refreshToken")
};

const onSilentRefresh = () => {
  const refreshToken = getCookie('refreshToken');
  const res = axios.get('/silent-refresh',{
      headers:{
        Authorization: `Bearer ${refreshToken}`,
      }}
    )
    .then(res => onLoginSuccess(res))
    .catch(error => {
      console.log(error);
    })
  return res
}

const onLoginSuccess = response => {
  const accessToken = response.data.access_token;
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  const refreshToken = response.data.refresh_token;
  setCookie('refreshToken', refreshToken, {
    path: "/",
    secure: true,
    sameSite: "none"
  })
  // setTimeout(onSilentRefresh(), JWT_EXPIRRY_TIME - 60000);
}

const loginCheckDB = () => {
  axios.get( "/check")    
    .then(response => {
    console.log("check: ", response.data);
    })
    .catch(error=>{
    console.log(error);
    })
}

export { loginDB, loginCheckDB, onLoginSuccess, onSilentRefresh, logoutDB };