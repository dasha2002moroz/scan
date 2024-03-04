import { authAPI } from "../api/auth-api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    companyLimit: null,    
    usedCompanyCount: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData =
   (companyLimit, usedCompanyCount) => ({
        type: SET_USER_DATA, payload: {companyLimit, usedCompanyCount}
    })
  
export const getAuthUserData = (token) => async (dispatch) => {
   
    let response = await authAPI.info(token)
    console.log(response)
      }


export default userReducer;



