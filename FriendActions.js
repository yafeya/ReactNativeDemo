import { ADD_FRIEND, FOUND_FRIEND } from './types';

export const addFriend = friendIndex => (
  {
    type: ADD_FRIEND,
    payload: friendIndex,
  }
);

export const foundFriend = friendIndex => (
  {
    type: FOUND_FRIEND,
    payload: friendIndex
  }
)