import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import { SampleReduxTemplate } from '../templates/SampleTemplate';


export const SampleReduxPage = () => {
    return (
        <SampleReduxTemplate taxRate={8} />
    )
}