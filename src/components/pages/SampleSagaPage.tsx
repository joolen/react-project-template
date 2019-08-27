import React from 'react'
import { Container, Grid, Button } from '@material-ui/core';
import ReduxSagaContainer from '../../containers/SagaSampleContainer';
import { RouteComponentProps, withRouter } from 'react-router';


export const ReduxSagaSampleComponent = withRouter((props: RouteComponentProps) => {
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
                <ReduxSagaContainer />
                <Button onClick={() => handleClick()} variant='contained' color="primary">Go home</Button>
            </Grid >
        </Container>)
})