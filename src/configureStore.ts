import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './modules'
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas';

export const history = createBrowserHistory()

export default function configureStore(preloadedState?: any) {
    const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            ),
        ),
    )
    sagaMiddleware.run(rootSaga);
    return store
}