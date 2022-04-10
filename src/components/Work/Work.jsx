import React from 'react';
import { Box, Grid, IconButton, Link, makeStyles, Paper, Tooltip, Typography } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import styled from 'styled-components';

const workArray = [
    { id: 0, image: './images/facerecognition.png', text: 'Face Recognition App for Schools', link: 'https://group2-tech-dominators-facial-recognition-app-front-end.vercel.app/' },
    { id: 1, image: './images/randommealgen.png', text: 'Random Meal Generator', link: 'https://random-meal-generator-gilt.vercel.app/' },
    { id: 2, image: './images/todoapp.png', text: 'To Do App', link: 'https://week5-tau.vercel.app/' },
];

const secondWorkArray = [
    { id: 0, image: './images/Store.png', text: 'Store Management API', link: 'https://github.com/Gesare5/StoreManagementAPI' },
    { id: 1, image: './images/facerecognition2.png', text: 'Face Recognition App for Schools Web API', link: 'https://github.com/Gesare5/Face_Recognition_API/tree/main/face-recognition-app' },
];

// TODO: Use Vector images instead


const Work = (props) => {

    const { id } = props;

    const Info = styled.div`
        opacity: 0;
        width: 100%;
        height: 100%;
        position:absolute;
        top: 0;
        left: 0;
        z-index: 3;
        /* background-color: rgb(255, 241, 255); */
        background-color: rgba(5, 174, 88, 1);
        transition: all 1s ease;
`;
    const Container = styled.div`
        position: relative;
        height: 100%;
        width: 100%;
        &:hover ${Info}{
            opacity: 1;
        }
`;

    const useStyles = makeStyles({
        container: {
            // border: 'none',
            // margin: 0,
            // padding: 0,
            // backgroundImage: "url('https://images.unsplash.com/photo-1647859377726-596d9620cffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            // Photo by <a href="https://unsplash.com/@redredorange?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mery Khachatryan</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            // background: 'rgba(255, 187, 255, .5)',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            minHeight: '110vh',
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            // minheight: '100vh',
            // overflowY: 'auto',
            // overflowX: 'hidden',
            // perspective: '10px',
        },
        header: {
            //     position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            //     // transformStyle: 'preserve-3d',
            // zIndex: -1,
        },
        subContainer: {
            // width: '80vw',
            height: '80%',

        },
        imageBox: {
            height: '50vh',
            // position: 'relative',
        },
        image: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            zIndex: 2,
        },
        paper: {
            height: '100%',
            width: '100%',
        },
        projectTitle: {
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
        },

        projectLink: {
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(255, 187, 255)',
        },

        // img: {
        //     // transform: 'translateZ(-10px) scale(2)',
        //     height: '100%',
        //     width: '100%',
        //     objectFit: 'cover',
        //     position: 'absolute',
        //     zIndex: -5,
        // },
    })

    const classes = useStyles();

    return (
        <div className={classes.container} id={id}>
            <Box className={classes.header}>
                <Typography variant='h4' style={{ margin: '1rem 0' }}>My Projects</Typography>
                <Grid container spacing={2} item sm={10} className={classes.subContainer} >

                    {workArray.map((item) => (
                        <Grid item xs={12} md={4} key={item.id} className={classes.imageBox}  >
                            <Paper className={classes.paper} elevation={2}>
                                <Container>
                                    <img alt='' src={item.image} className={classes.image} />
                                    <Info>
                                        <Tooltip title="View App">
                                            <Link href={item.link}>
                                                <IconButton className={classes.projectLink}>
                                                    <FullscreenIcon color='primary' />
                                                </IconButton>
                                            </Link>
                                        </Tooltip>
                                        <Typography className={classes.projectTitle}>
                                            {item.text}
                                        </Typography>
                                    </Info>
                                </Container>
                            </Paper>
                        </Grid>
                    ))}

                    {secondWorkArray.map((item) => (
                        <Grid item xs={12} md={6} key={item.id} className={classes.imageBox}  >
                            <Paper className={classes.paper} elevation={2}>
                                <Container>
                                    <img alt='' src={item.image} className={classes.image} />
                                    <Info>
                                        <Tooltip title="View Github">
                                            <Link href={item.link}>
                                                <IconButton className={classes.projectLink}>
                                                    <FullscreenIcon color='primary' />
                                                </IconButton>
                                            </Link>
                                        </Tooltip>
                                        <Typography className={classes.projectTitle}>
                                            {item.text}
                                        </Typography>
                                    </Info>
                                </Container>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};
// onMouseOver = {() => setHover(true)}
export default Work;