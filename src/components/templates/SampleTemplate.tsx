import React from 'react'
import { Container, Grid, Button, Typography, Paper } from '@material-ui/core';
import SampleContainer from '../../containers/ReduxSampleContainer';
import { RouteComponentProps, withRouter } from 'react-router';

type ownProp = {
    taxRate: number
}

type props = ownProp & RouteComponentProps

export const SampleReduxTemplate = withRouter((props: props) => {
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
                <SampleContainer taxRate={props.taxRate} />
                <Paper style={{ backgroundColor: 'black', padding: 10, marginBottom: 3 }}>
                    <Typography color="secondary">
                        Redux sources are here
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                        reducers : src/modules/SampleState.ts
                    </Typography>
                    <Typography style={{ color: 'white' }}>
                        container : src/containers/ReduxSampleContainer.ts
                    </Typography>
                </Paper>
                <Button onClick={() => handleClick()} variant='contained' color="primary">Go home</Button>
            </Grid >
        </Container>)
})