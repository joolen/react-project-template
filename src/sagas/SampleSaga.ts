import { put, takeEvery, call } from 'redux-saga/effects'
import { sampleSagaActions } from '../modules/SampleSaga';
import { getGithubApi } from '../API/github';

function dummyWait() {
    return new Promise(resolve => {
        const duration = 1000 + Math.floor(Math.random() * 1500);
        setTimeout(() => {
            resolve({ data: duration });
        }, duration);
    });
}

function* getMessage() {
    yield put(sampleSagaActions.setMessage("Loading...(Using setTimeout Function!)"));
    yield call(dummyWait);
    const message: string = yield call(getGithubApi);
    yield put(sampleSagaActions.setMessage(message));
}

// Watch actions
export function* watchApiAsync() {
    yield takeEvery('ACTIONS_GET_MESSAGE', getMessage);
}
