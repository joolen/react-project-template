import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../modules/index';
import { sampleActions } from '../modules/SampleState';
import { CalculateSample } from '../components/organisms/Sample';

export interface sampleActions {
    setPrice: (price: number) => Action<number>,
    setIncludePrice: (price: number) => Action<number>,
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
        setPrice: (price: number) => dispatch(sampleActions.setPrice(price)),
        setIncludePrice: (tax: number) => dispatch(sampleActions.setIncludePrice(tax)),
    };
}

function mapStateToProps(appState: State) {
    return Object.assign({}, appState.sample);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculateSample);
