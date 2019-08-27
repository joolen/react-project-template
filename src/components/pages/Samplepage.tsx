import React from 'react'
import { Container, Grid, Button } from '@material-ui/core';
import SampleContainer from '../../containers/ReduxSampleContainer';
import { RouteComponentProps, withRouter } from 'react-router';


export const ReduxSampleComponent = withRouter((props: RouteComponentProps) => {
    const handleClick = () => {
        props.history.push('/');
    }
    return (
        <Container maxWidth='md'>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <SampleContainer taxRate={8} />
                <Button onClick={() => handleClick()} variant='contained' color="primary">Go home</Button>
            </Grid >
        </Container>)
})