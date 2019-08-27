import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import { sampleReduecer, SampleState } from './SampleState';
import { sampleSagaReduecer, SampleSagaState } from './SampleSaga';

const rootReducer = (history: History) => combineReducers({
    sample: sampleReduecer,
    saga: sampleSagaReduecer,
    router: connectRouter(history)
})

export type State = {
    sample: SampleState
    saga: SampleSagaState
    router: RouterState
}

export default rootReducer