import React from 'react';
import { Button, Grid, makeStyles, OutlinedInput, Paper, TextField, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';

const Contact = (props) => {

    const { id } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const useStyles = makeStyles({
        container: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            minHeight: '80vh',
            width: '80%',
            backgroundColor: 'rgba(255,241,255, 1)',
            display: 'flex',
            justifyContent: matches ? 'flex-end' : 'center',
            alignItems: 'center',
            padding: '3%',
            position: 'relative',
        },
        content: {
            display: 'flex',
            flexDirection: matches ? 'row' : 'column',
            justifyContent: 'space-between',
            marginBottom: '5%',
        },
        imageBox: {
            height: '70%',
            width: '30%',
            position: 'absolute',
            top: '7%',
            left: '-5%',
            zIndex: 10,
            display: matches ? 'block' : 'none',
        },
        image: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            borderRadius: 10,
        },
        btn: {
            backgroundColor: 'rgba(5, 174, 88, 1)',
            width: '50%',
            color: 'rgb(255, 241, 255)',
            borderRadius: 40,
            padding: 10,
            margin: '2rem 0',
            '&:hover': {
                backgroundColor: '#039449',
            },
        },
        input: {
            width: matches ? '45%' : '100%',
        }
    })

    const classes = useStyles();

    return (
        <Grid className={classes.container} id={id}>
            <Typography variant='h4' style={{ margin: '1rem 0' }}>Contact</Typography>
            <Paper className={classes.card} elevation={3}>
                <Grid container item xs={12} sm={8}>
                    <Typography variant='h6' style={{ marginBottom: '1rem' }}>Say Hello :)</Typography>
                    <Grid item xs={12} className={classes.content}>
                        < OutlinedInput placeholder='Name' className={classes.input} />
                        < OutlinedInput placeholder='Email' className={classes.input} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder='Message' variant='outlined' multiline minRows={4} style={{ width: '100%' }} />
                    </Grid>
                    <Button className={classes.btn}>Send Message</Button>
                    <Grid className={classes.imageBox}>
                        <img alt='' src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                            className={classes.image} />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Contact;