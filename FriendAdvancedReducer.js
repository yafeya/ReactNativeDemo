import { combineReducers } from 'redux';
import { FOUND_FRIEND } from './types';

const INITIAL_STATE = {
    selectIndex: 0
};

export const friendAdvancedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FOUND_FRIEND:
        const newState = { selectIndex: action.payload };
        return newState;
      default:
        return state;
    }
  };