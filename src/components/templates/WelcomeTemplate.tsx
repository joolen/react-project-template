import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CardItem, CardItemprops } from '../organisms/CardItem';
import { Grid, Link } from '@material-ui/core';

type props = {
    cards: CardItemprops[]
}
export const WelcomeTemplate = (props: props) => {
    return (
        <Container maxWidth="lg">
            <Grid container justify="center" spacing={3}>
                <Grid item>
                    <Typography variant="h4" component="div" >
                        Welcome to react template!
                    </Typography>
                    <Typography variant="subtitle1" component="div" align="center" >
                        You can use react application easily!
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={1}>
                <Grid item md={9}>
                    <Grid container justify="flex-end" spacing={3}>
                        {props.cards.map((card, index) => (
                            <Grid item key={index}>
                                <CardItem
                                    image={card.image}
                                    title={card.title}
                                    describe={card.describe}
                                    learnMoreUrl={card.learnMoreUrl}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item md={3}>
                    <Typography component={'span'} variant={'body2'} >
                        <Typography variant="h5">
                            See other documents!
                        </Typography>
                        <ul>
                            <li><Link href='https://reactjs.org/' target='_blank'>React</Link> </li>
                            <li><Link href='https://material-ui.com/' target='_blank'>material-ui</Link> </li>
                            <li><Link href='https://redux.js.org/' target='_blank'>react-redux</Link> </li>
                            <li><Link href='https://github.com/aikoven/typescript-fsa' target='_blank'>typescript-fsa</Link> </li>
                            <li><Link href='https://reacttraining.com/react-router/' target='_blank'>react-router</Link> </li>
                            <li><Link href='https://storybook.js.org/' target='_blank'>Storybook</Link> </li>
                        </ul>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}