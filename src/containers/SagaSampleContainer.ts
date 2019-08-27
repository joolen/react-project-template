import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../modules/index';
import { sampleSagaActions } from '../modules/SampleSaga';
import { SampleSaga } from '../components/organisms/SampleSaga';

export interface sampleSagaActions {
    setMessage: (message: string) => Action<string>,
    getMessage: () => Action<void>,
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
        setMessage: (message: string) => dispatch(sampleSagaActions.setMessage(message)),
        getMessage: () => dispatch(sampleSagaActions.getMessage()),
    };
}

function mapStateToProps(appState: State) {
    return Object.assign({}, appState.saga);
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleSaga);
