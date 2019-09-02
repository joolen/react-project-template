import { put, takeEvery, call } from 'redux-saga/effects'
import { sampleSagaActions } from '../modules/SampleSaga';
import { getGithubApi } from '../API/github';

function dummyWait() {
    return new Promise(resolve => {
        const duration = 3000;
        setTimeout(() => {
            resolve({ data: duration });
        }, duration);
    });
}

function* getMessage() {
    yield put(sampleSagaActions.setMessage("Loading...(3 seconds wait by using setTimeout Function!)"));
    yield call(dummyWait);
    const message: string = yield call(getGithubApi);
    yield put(sampleSagaActions.setMessage(message));
}

// Watch actions
export function* watchApiAsync() {
    yield takeEvery('ACTIONS_GET_MESSAGE', getMessage);
}
