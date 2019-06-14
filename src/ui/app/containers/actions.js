/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export const fetchLuckyNumber = (luckyNumber) => {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    luckyNumber: luckyNumber
  };
}
export const firstNameValue = (firstname) => {
  return {
    type: DISPATCH_ACTIONS.GET_FIRST_NAME,
    firstName: firstname
  };
}
export const lastNameValue = (lastname) => {
  return {
    type: DISPATCH_ACTIONS.GET_LAST_NAME,
    lastName: lastname
  };
}
export const userNameValue = (username) => {
  return {
    type: DISPATCH_ACTIONS.GET_USER_NAME,
    userName: username
  };
}