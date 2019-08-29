import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import { SampleReduxTemplate } from '../templates/SampleTemplate';


export const SampleReduxPage = () => {
    return (
        <SampleReduxTemplate taxRate={8} explainTitle="redux souces are here"
            explainBody={[
                'reducers : src/modules/SampleState.ts',
                "container : src/containers/ReduxSampleContainer.ts"
            ]}
            handleContainer="Redux" />
    )
}