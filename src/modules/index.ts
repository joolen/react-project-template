import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history)
})

export type State = {
    router: RouterState
}

export default rootReducer