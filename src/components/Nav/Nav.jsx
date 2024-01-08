import React, { useState } from 'react';
import { Grid, makeStyles, IconButton, Link, List, ListItem, SwipeableDrawer, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Background from '../Background/Background';
import Footer from './Footer';
import Hero from '../Hero/Hero';

const navList = [
    { link: '#hero', text: 'Home' },
    { link: '#about', text: 'About' },
    { link: '#services', text: 'Services' },
    { link: '#background', text: 'Background' },
    { link: '#skills', text: 'Skills' },
    { link: '#projects', text: 'Projects' },
    { link: '#contact', text: 'Contact' },
];


const Nav = () => {

    const [toggleDrawer, setToggleDrawer] = useState(false);

    const useStyles = makeStyles({
        menuBox: {
            position: 'fixed',
            top: 10,
            right: 10,
            // padding: 10,
        },
        btn: {
            backgroundColor: 'rgb(255,241,255)',
            '&:hover': {
                backgroundColor: '#e7dce7',
            },
        },
        list: {
            width: 250,
            // float: 'right',
        },
        listItem: {
            padding: '1rem',
            '&:hover': {
                backgroundColor: 'rgba(7, 0, 59, .4)',
            },
        },
    })

    const classes = useStyles();

    const handleToggleDrawer = () => {
        setToggleDrawer(!toggleDrawer);
    }

    // const preventDefault = (e) => {
    //     // e.preventDefault();
    // }

    return (
        <Grid>
            <Grid className={classes.menuBox}>
                <IconButton className={classes.btn} onClick={handleToggleDrawer}>
                    <MenuIcon color='secondary' />
                </IconButton>
            </Grid>
            <SwipeableDrawer
                anchor='right'
                open={toggleDrawer}
                onClose={handleToggleDrawer}
                onOpen={() => setToggleDrawer(true)}
            // onOpen={handleToggleDrawer}
            >
                <List className={classes.list}>
                    {navList.map((navItem) => (
                        <ListItem key={navItem.text} className={classes.listItem}>
                            {/* <ListItemText primary= /> */}
                            {/* <Link href={`#${navItem}`} onClick={preventDefault}> */}
                            <Link href={navItem.link} underline='none'>
                                <Typography variant='h6'> {navItem.text}</Typography>
                            </Link>
                        </ListItem>
                    )
                    )}
                </List>
            </SwipeableDrawer>
            <Hero id="hero" />
            <About id="about" />
            <Services id="services" />
            <Background id="background" />
            <Skills id="skills" />
            <Work id='work' />
            <Contact id='contact' />
            <Footer />
        </Grid>
    )
};

export default Nav;