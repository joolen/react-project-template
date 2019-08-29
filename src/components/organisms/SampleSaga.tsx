import React, { useEffect } from 'react'
import { Typography, Grid, Paper, Link } from '@material-ui/core';
import { sampleSagaActions } from '../../containers/SagaSampleContainer';
import { SampleSagaState } from '../../modules/SampleSaga';
import { bgcolor } from '@material-ui/system';

type props = sampleSagaActions & SampleSagaState;

export const SampleSaga: React.FC<props> = (props) => {
    useEffect(() => {
        props.getMessage()
    }, [])
    return (
        <div>
            <Grid container justify='center' alignItems='center'>
                <Grid item>
                    < Typography variant='h3' color="secondary"> This is a sample page of redux-saga!</Typography >
                </Grid>
                <Grid item>
                    <Grid container alignItems='center'>
                        <Grid item>
                            <Typography variant='h4' style={{ padding: 10 }}>Message from GitHub API is</Typography>
                            <Paper style={{ backgroundColor: '#cfe8fc' }}>
                                <Typography variant='h6'>{props.message}</Typography>
                            </Paper>
                            <Typography variant='h4' style={{ padding: 10 }}>
                                This api calls <Link href='https://api.github.com/zen'>https://api.github.com/zen</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}