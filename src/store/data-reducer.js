import { dataAPI } from "../api/data-api";

const SET_DATA = 'SET_DATA'

let initialState = {
    data: null,
    data2: null,
    detaildata: null
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setData =
   (data) => ({
        type: SET_DATA, payload: {data}
    })
export const setData2 =
    (data2) => ({
         type: SET_DATA, payload: {data2}
     })

export const setDetaildata =
     (detaildata) => ({
          type: SET_DATA, payload: {detaildata}
      })
  
export const getData = (token, inn, tonality, documentCount, startDate, endDate, completeness="false", businessContext="false", mainRole="false",
     riskFactors="false", technicalNews="false", announcements="false", newsDigests="false") => async (dispatch) => {

    console.log(token, inn, tonality, documentCount, startDate, endDate, completeness, businessContext, mainRole, riskFactors, technicalNews, announcements, newsDigests)
   
    let response = await dataAPI.getGeneralData(token, inn, tonality, documentCount, startDate, endDate, completeness,
        businessContext, mainRole, riskFactors, technicalNews, announcements, newsDigests);
        console.log(response.status)
        if (response.status === 200) {
            // success, get auth data
            console.log('yes')
            dispatch(setData(response.data))
        }
        else {
            console.log('No')
            // {_error: message}));
        };
    
    let response2 = await dataAPI.getData(token, inn, tonality, documentCount, startDate, endDate, completeness, 
        businessContext, mainRole, riskFactors, technicalNews, announcements, newsDigests);
      console.log(response2.status)
      if (response2.status === 200) {
          // success, get auth data
          console.log('yes2')
          dispatch(setData2(response2.data))
      }
      else {
          console.log('No2')
          // {_error: message}));
      }

    }

export const getDetail = (token, arrForRequest) => async (dispatch) => {
    console.log("test")
    let response3 = await dataAPI.getDetailData(token, arrForRequest);
        console.log(response3.status)
        if (response3.status === 200) {
            // success, get auth data
            console.log('yes3')
            dispatch(setDetaildata(response3.data))
        }
        else {
            console.log('No3')
            // {_error: message}));
        }
    }

export default dataReducer;



