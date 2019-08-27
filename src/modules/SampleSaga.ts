import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export interface SampleSagaState {
    message: string;
}

const initialState: SampleSagaState = {
    message: ''
};

export const sampleSagaActions = {
    getMessage: actionCreator<void>('ACTIONS_GET_MESSAGE'),
    setMessage: actionCreator<string>('ACTIONS_SET_MESSAGE')
};

export const sampleSagaReduecer = reducerWithInitialState(initialState)
    .case(sampleSagaActions.setMessage, (state, message) => {
        const newState = Object.assign({}, state);
        newState.message = message;
        return newState;
    })
    .default((state) => {
        return state
    }
    );