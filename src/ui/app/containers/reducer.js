/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  firstName: '',
  lastName: '',
  userName: '',
  luckyNumber: -1
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.GET_FIRST_NAME:
      state = {
        ...state,
        firstName: action.firstName
      }
      break;
    case DISPATCH_ACTIONS.GET_LAST_NAME:
      state = {
        ...state,
        lastName: action.lastName
      }
      break;
      case DISPATCH_ACTIONS.GET_USER_NAME:
        state = {
          ...state,
          userName: action.userName
        }
      case DISPATCH_ACTIONS.GET_LUCKY_NUMBER:
        state = {
          ...state,
          luckyNumber: action.luckyNumber
        }
      break;
    
  }
  return state;
}

export default reducer;
