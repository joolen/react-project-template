import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import { SampleReduxTemplate } from '../templates/SampleTemplate';


export const ReduxSagaSampleComponent = withRouter((props: RouteComponentProps) => {
    return (
        <SampleReduxTemplate explainTitle="redux-saga souces are here"
            explainBody={[
                'reducers : src/modules/SampleSaga.ts',
                "container : src/containers/ReduxSampleContainer.ts",
                "saga : src/sagas/SampleSaga.ts"
            ]}
            handleContainer="Redux-Saga" />
    )
})