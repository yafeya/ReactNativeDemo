import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, ADD_FRIEND } from './types';
import { getFriendsData } from './FriendsApi';

export function fetchingFriends() {
  return {
    type: FETCHING_FRIENDS
  }
}

export function fetchingFriendsSuccess(data) {
  return {
    type: FETCHING_FRIENDS_SUCCESS,
    data,
  }
}

export function fetchingFriendsFailure() {
  return {
    type: FETCHING_FRIENDS_FAILURE
  }
}

// fetch Friends is a action creator, its return value is a function.
// Normally, the dispatch can only dispatch a action object. 
// But in the async mode, we need to dispatch a function like the action creator.
// That's why we need a redux-thunk middle-ware, this is the key diff between async & sync mode.
export function fetchFriends() {
  return (dispatch) => {
    dispatch(fetchingFriends())
    getFriendsData()
      .then((data) => {
        dispatch(fetchingFriendsSuccess(data))
      })
      .catch((err) => {
        console.log('err:', err);
        dispatch(fetchingFriendsFailure());
      });
  }
}

export const addFriend = friendIndex => (
  {
    type: ADD_FRIEND,
    payload: friendIndex,
  }
);
