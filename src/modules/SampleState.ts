import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export interface SampleState {
    price: number;
    includeTax: number;
}

const initialState: SampleState = {
    price: 0,
    includeTax: 0
};

export const sampleActions = {
    setPrice: actionCreator<number>('ACTIONS_SET_PRICE'),
    setIncludePrice: actionCreator<number>('ACTIONS_SET_INCLUDE_PRICE')
};

export const sampleReduecer = reducerWithInitialState(initialState)
    .case(sampleActions.setPrice, (state, price) => {
        const newState = Object.assign({}, state);
        newState.price = price;
        return newState;
    })
    .case(sampleActions.setIncludePrice, (state, tax) => {
        const newState = Object.assign({}, state);
        newState.includeTax = Math.round(state.price * (1 + tax / 100));
        return newState;

    })
    .default((state) => {
        return state
    }
    );