import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter, RouteComponentProps } from 'react-router';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 300,
    },
});

export type CardItemprops = {
    image: string,
    title: string,
    describe: string,
    learnMoreUrl: string
}

type ownProps = CardItemprops & RouteComponentProps;

export const CardItem = withRouter((props: ownProps) => {
    const classes = useStyles();
    function handleClick() {
        props.history.push('/redux-sample')
    }

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={() => handleClick()}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.describe}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href={props.learnMoreUrl} target="_blank" rel="noopener noreferrer">Learn More</a>
                </Button>
            </CardActions>
        </Card>
    );
})