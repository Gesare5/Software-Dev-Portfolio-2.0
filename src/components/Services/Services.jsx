import React from 'react';
import { Avatar, CardContent, Grid, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';

const contentArray = [
    { id: 0, image: 'https://images.unsplash.com/photo-1636897831244-99f077caa9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', title: 'FrontEnd Dev', text: ' Suscipit, officia tempora? Magni ea praesentium debitis vel quam voluptate omnis.' },
    { id: 1, image: 'https://images.unsplash.com/photo-1636897831244-99f077caa9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', title: 'BackEnd Dev', text: ' Suscipit, officia tempora? Magni ea praesentium debitis vel quam voluptate omnis.' },
    { id: 2, image: 'https://images.unsplash.com/photo-1636897831244-99f077caa9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', title: 'Testing', text: ' Suscipit, officia tempora? Magni ea praesentium debitis vel quam voluptate omnis.' }
];

const Services = (props) => {

    const { id } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const useStyles = makeStyles({
        mainContainer: {
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageContainer: {
            height: matches ? '70vh' : '40vh', //70vh
            width: '40%', //40vw
            // background: 'blue',
            position: 'relative',
        },
        servicesContainer: {
            width: '80%',
            display: 'flex',
            flexDirection: matches ? 'row' : 'column',
            marginTop: '-8%',
            zIndex: 11,
        },
        smallAvatar: {
            height: '38%',
            width: '38%',
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            border: '12px solid rgba(5, 174, 88, 1)',
            boxShadow: '0px 0px 15px 2px rgba(5, 174, 88, 1)',
        },
        largeAvatar: {
            height: '100%',
            width: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        circle: {
            height: '40%',
            width: 'auto',
            position: 'absolute',
            top: '-10%',
            left: '-10%',
        },
        cardContent: {
            backgroundColor: 'rgba(255,241,255,0.8)',
            // backgroundColor: 'rgba(255, 187, 255, .2)',
            marginRight: '1rem',

        },

    });

    const classes = useStyles();

    return (
        <Grid className={classes.mainContainer} id={id}>
            <Typography variant='h4'>Services</Typography>
            <Grid className={classes.imageContainer}>
                <div className={classes.circle}>
                    <img height='100%' alt='circle' src='./images/circle.png' />
                </div>
                {/* <Avatar className={classes.largeAvatar} elevattion={2} src='https://images.unsplash.com/photo-1636897831244-99f077caa9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' /> */}
                <Grid className={classes.largeAvatar}>
                    <img className={classes.largeAvatar} alt='' src='https://images.unsplash.com/photo-1636897831244-99f077caa9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                </Grid>
                <Avatar className={classes.smallAvatar} src='https://images.unsplash.com/photo-1636897831244-99f077caa9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
            </Grid>

            <Grid item xs={12} className={classes.servicesContainer}>
                {contentArray.map((item) =>
                    <CardContent key={item.id} className={classes.cardContent}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt='' src={item.image} />
                            </ListItemAvatar>
                            <ListItemText primary={item.title} secondary={item.text} />
                        </ListItem>
                    </CardContent>
                )}
            </Grid>
        </Grid>
    );
};

export default Services;