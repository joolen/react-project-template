import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import { sampleReduecer, SampleState } from './SampleState';

const rootReducer = (history: History) => combineReducers({
    sample: sampleReduecer,
    router: connectRouter(history)
})

export type State = {
    sample: SampleState
    router: RouterState
}

export default rootReducer