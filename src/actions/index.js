import axios from "axios";
import { API_URL } from "../constant/constant";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const ADD_SMURFS = "ADD_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (input_data) => {
  return { type: FETCH_SUCCESS, payload: input_data };
};

export const fetchFail = (input_error) => {
  return { type: FETCH_FAIL, payload: input_error };
};

/**
 * allows us to set the value of the error message slice of state.
 */
export const setError = (input_error) => {
  return { type: SET_ERROR, payload: input_error };
};

//FETCH_SMURFS - performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve all smurfs from the api. Save the result of to our state and show an error if one is made.
export const fetchSmurfs = () => (dispatch) => {
  //dispatch fetchStart
  dispatch(fetchStart);
  //axios API call to API_URL
  axios
    .get(API_URL)
    //...success - dispatch set data
    .then((resp) => {
      dispatch(fetchSuccess(resp.data));
    })
    //...failure - set error
    .catch((error) => {
      dispatch(fetchFail(JSON.stringify(error)));
    });
}; //end fetchSmurfs

/**
 * ADD_SMURFS - allows us to add new smurf (including the name, nickname, position, summary)
 * @returns
 */
export const addSmurfs = (input_object) => (dispatch) => {
  //axios API call to API_URL
  axios
    .post(API_URL, input_object)
    //...success flag
    .then((resp) => {
      dispatch(fetchSuccess(resp.data));
    })
    //...failure flag
    .catch((error) => {
      dispatch(setError(JSON.stringify(error)));
    });
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
