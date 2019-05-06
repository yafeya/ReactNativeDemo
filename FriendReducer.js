import { combineReducers } from 'redux';
import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, ADD_FRIEND } from './types';

const INITIAL_STATE = {
  current: [],
  possible: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        possible: [],
        isFetching: true
      }
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        possible: action.data,
        isFetching: false,
        dataFetched: true
      }
    case FETCHING_FRIENDS_FAILURE:
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
