import React from 'react';
import { Box, Button, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';


const About = (props) => {

    const { id } = props;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const useStyles = makeStyles({
        container: {
            minHeight: '130vh',
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            overflow: 'hidden',
            // padding: '1rem',
            marginTop: '2rem',
            boxShadow: '0 0 6px rgba(5, 174, 88, .2)',
        },
        firstContentBox: {
            border: '3px solid rgba(5, 174, 88, 1)',
            padding: '1rem',
            textAlign: 'center',
            position: 'absolute',
            top: '14vh',
            left: '13%',
            zIndex: 10,
            backgroundColor: 'rgb(255,241,255)', //#FFF1FF
            marginBottom: !matches && '4rem',
        },
        circle: {
            height: '25vh',
            width: 'auto',
            position: 'absolute',
            top: 0,
            left: '5%',
        },
        greenBox: {
            backgroundColor: 'rgba(5, 174, 88, 1)',
            height: '25%',
            width: '50%',
            position: 'absolute',
            top: '28%',
            right: '8%',
        },
        svgBox: {
            height: '150%',
            width: '40%',
            position: 'absolute',
            top: '30%',
            right: '10%',
            border: '6px solid rgba(5, 174, 88, 1)',
            backgroundColor: 'rgb(255, 241, 255)',
            zIndex: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        secondContent: {
            position: 'absolute',
            top: '70%',
            left: '-45%',
            border: '5px solid rgba(5, 174, 88, 1)',
            backgroundColor: 'rgb(255, 241, 255)',
            padding: 10,
            marginTop: !matches && '4rem',
            display: matches ? 'block' : 'none',
        },
        downloadBtn: {
            backgroundColor: 'rgba(5, 174, 88, 1)',
            width: '50%',
            color: 'rgb(255, 241, 255)',
            borderRadius: 40,
            padding: 10,
            margin: '1rem 0',
            '&:hover': {
                backgroundColor: '#039449',
            },
        },

    })

    const classes = useStyles();

    return (
        <Grid className={classes.container} id={id}>
            <Box style={{
                width: '90vw', minHeight: '100vh', position: 'relative', marginTop: '1rem',
            }}>
                <div className={classes.circle}>
                    <img height='100%' alt='circle' src='./images/circle.png' />
                </div>
                <Grid item sm={7} className={classes.firstContentBox}>
                    <Typography variant='h4'> About Me</Typography>
                    <Typography variant='h5'> I create clean, professional and functional web applications.</Typography>
                    <Typography> I am a highly energetic web developer. Building a successful product or application can be a challenge. Having a background in Telecommunications Engineering enables me to bank on my experience to develop optimal and efficient products. I am extremely adaptable to the ever changing field of Technology and Engineering.
                    </Typography>
                    <Button className={classes.downloadBtn}>
                        <Link href="./documents/Ivy_Chepkoech_Software_Development_CV.pdf" download
                            target="_blank" underline='none' style={{ color: 'rgb(255, 241, 255)' }}>Download CV</Link>
                    </Button>
                </Grid>
                <Grid className={classes.greenBox} >
                    {matches &&
                        <Grid item sm={8} className={classes.svgBox}>
                            <img height='80%' alt='seated girl' src='./images/woman.png' />
                        </Grid>
                    }
                    <Grid item sm={8} className={classes.secondContent}>
                        <Typography> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nam harum cum nulla, incidunt sed ullam dolorum sapiente quia quasi? Eum, enim. Eaque fugiat sapiente doloremque odit voluptatum suscipit accusamus. um dolor sit amet consectetur, adipisicing elit. Eligendi nam harum cum nulla, incidunt.
                        </Typography>
                        {/* can have image */}
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default About;

