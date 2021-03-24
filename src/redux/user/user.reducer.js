// A reducer is actually just a function that gets two properties a state object (representing the last state or initial state) and then it recieves an action.
import {UserActionTypes} from './user.types'



const INITIAL_STATE = {
  currentUser: null
}


const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return{
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;
