import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Canvas from './Canvas';

const Hero = (props) => {

    const { id } = props;

    const useStyles = makeStyles({
        container: {
            height: '100vh',
            width: '100vw',
            // background: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-30%',
        },
        contentBox: {
            minHeight: '80%',
            // background: 'blue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageBox: {
            height: '90%',
            width: '45%',
        },
        image: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            borderRadius: '42% 42% 42% 42%',
        },
        titles: {
            display: 'flex',
        },
        name: {
            marginTop: '-5%',
        },
        am: {
            marginTop: '-20%',
            marginLeft: '-42%',
        }

    })

    const classes = useStyles();
    return (
        <div id={id} >
            <Canvas />
            <Grid className={classes.container}>
                <Grid item xs={8} className={classes.contentBox}>
                    <div className={classes.imageBox}>
                        <img alt='' src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                            className={classes.image}
                        />
                    </div>
                    <Typography variant='h2' className={classes.name} >Ivy Gesare</Typography>

                    <div className={classes.titles}>
                        <Typography variant='h4'>Developer<span style={{ fontSize: 60, marginRight: 5, marginLeft: 5 }}>.</span></Typography>
                        <Typography variant='h4'> Engineer<span style={{ fontSize: 60, marginRight: 5, marginLeft: 5 }}>.</span>Problem Solver</Typography>
                        {/* <Typography variant='h4'>Problem Solver</Typography> */}
                    </div>
                    <Typography variant='h6' className={classes.am}>I'm</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Hero;