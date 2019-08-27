import React from 'react'
import { Typography, TextField, Grid } from '@material-ui/core';
import { sampleActions } from '../../containers/ReduxSampleContainer';
import { SampleState } from '../../modules/SampleState';

type ownprops = {
    taxRate: number
}

type props = ownprops & sampleActions & SampleState;

export const CalculateSample: React.FC<props> = (props) => {
    const setPrices = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        props.setPrice(parseInt(e.target.value))
        props.setIncludePrice(props.taxRate)
    }
    return (
        <div>
            <Grid container justify='center' alignItems='center'>
                <Grid item>
                    < Typography variant='h3' > This is a sample page of redux!</Typography >
                </Grid>
                <Grid item>
                    <TextField
                        required
                        label='price exclude tax'
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => setPrices(e)}
                    />
                    <Typography variant='h4'>given tax rate is {props.taxRate}%</Typography>
                    <Typography variant='h5'>input value is：{props.price}</Typography>
                    <Typography variant='h5'>include tax：{props.includeTax}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}