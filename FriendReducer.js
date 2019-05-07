import { combineReducers } from 'redux';
import {
  FETCH_FRIENDS_PENDING,
  FETCH_FRIENDS_FULFILLED,
  FETCH_FRIENDS_REJECTED,
  ADD_FRIEND
} from './types';

const INITIAL_STATE = {
  current: [],
  possible: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_PENDING:
      return {
        ...state,
        possible: [],
        isFetching: true
      }
    case FETCH_FRIENDS_FULFILLED:
      return {
        ...state,
        possible: action.payload,
        isFetching: false,
        dataFetched: true
      }
    case FETCH_FRIENDS_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case ADD_FRIEND:
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const {
        current,
        possible,
      } = state;

      // Pull friend out of friends.possible
      const addedFriend = possible.splice(action.payload, 1)[0];
      // And put friend in friends.current
      current.push(addedFriend);

      // Finally, update our redux state
      const newState = { current, possible };
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
	friends: friendReducer,
});
