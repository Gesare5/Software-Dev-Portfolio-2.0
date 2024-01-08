import React from 'react';
import { Box, Grid, LinearProgress, makeStyles, Paper, Typography } from '@material-ui/core';

// function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const skill = [
    {
        id: 1,
        title: 'HTML',
        value: 80,
    },
    {
        id: 2,
        title: 'CSS',
        value: 70,
    },
    {
        id: 3,
        title: 'JavaScript',
        value: 70,
    },
    {
        id: 4,
        title: 'React',
        value: 70,
    },
    {
        id: 5,
        title: 'TypeScript',
        value: 50,
    },
    {
        id: 6,
        title: 'Material UI',
        value: 70,
    }
]

const skillz = [
    {
        id: 1,
        title: 'C#',
        value: 70,
    },
    {
        id: 2,
        title: '.NET',
        value: 65,
    },
    {
        id: 3,
        title: 'SQL Server',
        value: 70,
    },
    {
        id: 4,
        title: 'Git',
        value: 80,
    },
    {
        id: 5,
        title: 'Github',
        value: 70,
    },
    {
        id: 6,
        title: 'BitBucket',
        value: 70,
    },
]

const Skills = (props) => {

    const { id } = props;

    const useStyles = makeStyles({
        container: {
            padding: '1rem',
            minWidth: '80vh',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            marginBottom: '3rem',
        },
        heading: {
            textAlign: 'center',
            margin: '1rem 0',
        },

        progress: {
            height: '.5rem',
            width: '95%',
            borderRadius: '10px',
            backgroundColor: 'rgba(5, 174, 88, .1)',
        },
        paper: {
            padding: '1rem 2rem',
            backgroundColor: 'rgba(255,241,255, 1)',
        },
    })

    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.container} id={id}>
            <Grid item xs={12}>
                <Typography variant='h4' className={classes.heading}>Skills</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant='h6' className={classes.heading}>Frontend</Typography>
                <Paper className={classes.paper}>
                    {skill.map((item) => (
                        <div key={item.id}>
                            <Typography>{item.title}</Typography>
                            <LinearProgressWithLabel value={item.value} className={classes.progress} color='secondary' />
                        </div>
                    ))}
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography variant='h6' className={classes.heading}>Backend</Typography>
                <Paper className={classes.paper}>
                    {skillz.map((item) => (
                        <div key={item.id}>
                            <Typography>{item.title}</Typography>
                            <LinearProgressWithLabel value={item.value} className={classes.progress} color='secondary' />
                        </div>
                    ))}
                </Paper>
            </Grid>

        </Grid>

    );
};

export default Skills;