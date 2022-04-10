import { Grid, Typography, Divider, makeStyles } from '@material-ui/core';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import { education, experience } from './BackGround';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import RoomIcon from '@material-ui/icons/Room';

const Background = (props) => {

    const { id } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const useStyles = makeStyles({
        mainGrid: {
            height: '80%',
            width: '100%',
            // border: '5px solid rgba(7, 0, 59, 0.8)',
            // background: 'fbf8fo',
        },
        middleDivider: {
            height: '55vh',
        },
        spacing: {
            padding: '5% 0',
        },
        container: {
            minHeight: '80vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

        },
        tag: {
            background: 'rgba(5, 174, 88, 0.8)',
            width: '21%',
            padding: '0 5px',
            textAlign: 'center',
        },
        title: {
            paddingBottom: '2rem',
            textAlign: 'center'
        },
    })

    const classes = useStyles();

    return (

        <div className={classes.container} id={id}>
            <Typography variant='h4' className={classes.title}>Background</Typography>

            <Grid container direction={matches ? 'row' : 'column'} justifyContent='space-evenly' className={classes.mainGrid}>
                <Grid item sm={5}>
                    <div style={{ display: 'flex' }}>
                        <WorkSharpIcon />
                        <Typography variant='h6' style={{ marginTop: -5, marginLeft: '1rem' }}>
                            Experience
                        </Typography>
                    </div>

                    <Divider />
                    {experience.map((item) => {
                        return (
                            <Grid key={item.id}>
                                <Grid className={classes.spacing}>
                                    <Typography className={classes.tag}> {item.period}</Typography>
                                    <Typography variant='subtitle1' style={{ marginTop: 8, fontWeight: 600 }}>{item.title}, {item.companyName}</Typography>
                                    <Typography> <span><RoomIcon style={{ fontSize: 15, marginBottom: -1 }} /></span> {item.location}</Typography>
                                    <Typography> {item.description}</Typography>
                                </Grid>
                                <Divider />
                            </Grid>
                        )
                    })}

                </Grid>

                <Divider orientation='vertical' flexItem className={classes.middleDivider} />

                <Grid item sm={5}>
                    <div style={{ display: 'flex' }}>
                        <SchoolSharpIcon />
                        <Typography variant='h6' style={{ marginTop: -5, marginLeft: '1rem' }}>
                            Education
                        </Typography>
                    </div>

                    <Divider />
                    {education.map((item) => {
                        return (
                            <Grid key={item.id}>
                                <Grid className={classes.spacing}>
                                    <Typography className={classes.tag}> {item.period}</Typography>
                                    <Typography variant='subtitle1' style={{ marginTop: 8, fontWeight: 600 }}>{item.name}</Typography>
                                    <Typography> <span><RoomIcon style={{ fontSize: 15, marginBottom: -1 }} /></span> {item.location}</Typography>
                                    <Typography> {item.description}</Typography>
                                </Grid>
                                <Divider />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    );
};

export default Background;