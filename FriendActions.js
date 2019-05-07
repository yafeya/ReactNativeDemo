import { FETCH_FRIENDS, ADD_FRIEND } from './types';
import { getFriendsData } from './FriendsApi';

/*
 * Promise middleware is easier than thunk. 
 * 1. You need to return a promise object for the action payload parameter.
 *    That means the action must have a payload property, and the value must be a promise object.
 * 2. And when you define the type property of the action such as <type-name>/
 *    Then you must has 3 corresponding actions, whose type should be:
 *      <type-name>_PENDING
 *      <type-name>_FULFILLED
 *      <type-name>_REJECTED
 *    And those action will be triggered automatically.
 *      <type-name>_PENDING triggered when you dispatch <type-name> action
 *      <type-name>_FULFILLED triggered when the promise is resolved.
 *      <type-name>_REJECTED triggered when the promise is rejected.
 */
export function fetchFriends() {
  return {
    type: FETCH_FRIENDS,
    payload: getFriendsData()
  }
}

export const addFriend = friendIndex => (
  {
    type: ADD_FRIEND,
    payload: friendIndex,
  }
);
