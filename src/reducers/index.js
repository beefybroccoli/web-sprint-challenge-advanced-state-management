import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_SMURFS,
  ADD_SMURFS,
  SET_ERROR,
} from "../actions/index";
/*
Adds the following state values into the initialState:
      - an array of smurfs
      - a boolean indicating if the app is loading
      - a string indicating a possible error message
*/
export const initialState = {
  arrayOfSmurfs: [],
  isLoading: false,
  errorString: "",
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH_START,
    case FETCH_START:
      return { ...state, isFetching: true };
    // FETCH_SUCCESS,
    case FETCH_SUCCESS:
      console.log("case FETCH_SUCCESS - action.payload = ", action.payload);
      return {
        ...state,
        isFetching: false,
        // arrayOfSmurfs: [...state.arrayOfSmurfs, ...action.payload],
        arrayOfSmurfs: [...action.payload],
      };
    // FETCH_FAIL,
    case FETCH_FAIL:
      console.log("case FETCH_FAIL - action.payload = ", action.payload);
      return { ...state, isFetching: false, errorString: action.payload };
    // ADD_SMURFS,
    case ADD_SMURFS:
      return {
        ...state,
        arrayOfSmurfs: [...state.arrayOfSmurfs, action.payload],
      };
    // SET_ERROR,
    case SET_ERROR:
      debugger;
      return { ...state, errorString: action.payload };
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;
/*
// Task List:]//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
*/
/*
#### Complete reducers/index.js
  Add in the needed state and reducer cases too hold and modify smurf error messages, loading status and smurf data. **If at all possible, add in action cases one at a time, instead of all at once. Test your state connects and reducer cases as nessisary.**

  * [x] Adds the following state values into the initialState:
      - an array of smurfs
      - a boolean indicating if the app is loading
      - a string indicating a possible error message

  * [ ] Add in the arguments needed to complete a standard reducer function.
  * [x] Add in a reducer case to accommodate the start of a smurf fetch.
  * [x] Add in a reducer case to accommodate the successful smurf api fetch.
  * [x] Add in a reducer cases to accommodate an error.
  * [x] Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, description and an internally generated id) into your smurf list.
  * [x] Add in a reducer case that adds in a value to the error message.
  
  * Connect your application to reducer through redux with the thunk and logger middleware packages attached.
*/
