/**
 * saga.js
 *
 * This file contains the Saga function used to get data from the
 * service layer. The Saga function injects data into the Redux
 * store via the put function, which takes an action as a parameter.
 *
 * @see https://redux-saga.js.org/
 * @see https://decembersoft.com/posts/changing-react-route-programmatically-with-redux-saga/
 */

import { call, put, takeLatest, takeEvery  } from 'redux-saga/effects';
import {fetchLuckyNumber, firstNameValue, lastNameValue, userNameValue} from './actions';
import { DISPATCH_ACTIONS } from './constants';
import request from 'superagent';

/*
// The Api wasn't working for me so I used a different api, it has similar results, you get a random number every time the input changes so technically is a random number from 1000
*/
const fetchNumber = () => {
    const requestUrl = `https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new`;
    return request.get(requestUrl).then((data) => {
      return JSON.parse(data.text);
    })
}
let finish = true;
function* getLuckyNumber({userName}) {
  const result = yield call(fetchNumber);
  try {
      if(finish) {
        yield put(fetchLuckyNumber(result));
    }
  } catch (err) {
    console.log(err);
  } finally {
    finish = false;
  }
};

function* getFirstName() {
  try {
    yield* takeEvery(firstNameValue);
  } catch (error) {
    console.log(error);
  }
};
function* getLastName() {
  try {
    yield* takeEvery(lastNameValue);
  } catch (error) {
    console.log(error);
  }
};
function* getUserName() {
  try {
    yield* takeEvery(userNameValue);
  } catch (error) {
    console.log(error);
  }
};

export default function* sagaFunction() {
  yield takeLatest(DISPATCH_ACTIONS.GET_FIRST_NAME, getFirstName);
  yield takeLatest(DISPATCH_ACTIONS.GET_LAST_NAME, getLastName);
  yield takeLatest(DISPATCH_ACTIONS.GET_USER_NAME, getUserName);
  yield takeLatest(DISPATCH_ACTIONS.GET_LUCKY_NUMBER, getLuckyNumber);
};
