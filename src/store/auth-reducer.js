import { authAPI } from "../api/auth-api";
import {setAuthUserData} from "./user-reducer";


const SET_USER_LOGIN = 'SET_USER_LOGIN'

let initialState = {
    login: null,    
    token: null,
    expire: null, 
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_LOGIN':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserLogin =
    (login, token, expire, isAuth) => ({
        type: SET_USER_LOGIN, payload: {login, token, expire, isAuth}
    })
  
export const getAuthUserLogin = (login, token, expire) => async (dispatch) => {

    dispatch(setAuthUserLogin(login, token, expire, true));
    let response = await authAPI.info(token)
    dispatch(setAuthUserData(response.companyLimit, response.usedCompanyCount));
      }   

export const login = (login, password) => async (dispatch) => {
  let response = await authAPI.login(login, password);
    if (response.status === 200) {
        let { accessToken, expire } = response.data;
        dispatch(getAuthUserLogin(login, accessToken, expire))
        return "Добро пожаловать!";
    }
    else {
        return "Неверно введены имя и пароль! Попробуйте еще раз.";
    }
}

export const logout = () => async (dispatch) => {
    dispatch(setAuthUserLogin(null, null, null, false));
}

export default authReducer;



