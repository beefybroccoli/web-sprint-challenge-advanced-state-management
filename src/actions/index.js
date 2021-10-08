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
      console.log("action index.js - resp.data = ", resp.data);
      dispatch(fetchSuccess(resp.data));
    })
    //...failure - set error
    .catch((err) => {
      console.log("action index.js - err = ", err);
      dispatch(fetchFail(err));
    });
}; //end fetchSmurfs

/**
 * ADD_SMURFS - allows us to add new smurf (including the name, nickname, position, summary)
 * @returns
 */
export const addSmurfs = () => (dispatch) => {
  //axios API call to API_URL
  //...success flag
  //...failure flag
};

/**
 * allows us to set the value of the error message slice of state.
 */
export const setError = () => {};
/*
//ADD_SMURFS - allows us to add new smurf (including the name, nickname, position, summary)

//SET_ERROR - allows us to set the value of the error message slice of state.

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
*/
/*
### Complete actions/index.js
//  Add in the action creators and action constants needed to add a smurf to state and fetch smurfs from the server. **If at all possible, add in action cases one at a time, instead of all at once. Test your state connects and reducer cases as nessisary.**
//   * [ ] Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve all smurfs from the api. Save the result of to our state and show an error if one is made.
//   * [ ] Add a standard action that allows us to add new smurf (including the name, nickname, position, summary).
//   * [ ] Add a standard action that allows us to set the value of the error message slice of state.
  
  ### Complete App.js
  Connect component to the fetchSmurfs action.
  * [ ] Connect the fetchSmurfs actions to the App component.
  * [ ] Call the fetchSmurfs action when the component first loads.
*/
