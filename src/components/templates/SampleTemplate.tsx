import React from 'react'
import { Container, Grid, Button, Typography, Paper } from '@material-ui/core';
import SampleContainer from '../../containers/ReduxSampleContainer';
import ReduxSagaContainer from '../../containers/SagaSampleContainer';
import { RouteComponentProps, withRouter } from 'react-router';

type ownProp = {
    taxRate: number,
    explainTitle: string,
    explainBody: string[],
    handleContainer: "Redux" | "Redux-Saga"
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
                {(props.handleContainer === 'Redux') ?
                    <SampleContainer taxRate={props.taxRate} /> :
                    <ReduxSagaContainer />
                }
                <Paper style={{ backgroundColor: 'black', padding: 10, marginBottom: 3 }}>
                    <Typography color="secondary">
                        {props.explainTitle}
                    </Typography>
                    {props.explainBody.map((explain, index) => {
                        return (
                            <div key={index}>
                                <Typography style={{ color: 'white' }}>
                                    {explain}
                                </Typography>
                            </div>
                        )
                    })}
                </Paper>
                <Button onClick={() => handleClick()} variant='contained' color="primary">Go home</Button>
            </Grid >
        </Container>)
})