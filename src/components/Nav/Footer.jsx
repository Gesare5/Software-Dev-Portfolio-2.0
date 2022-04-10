import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const Footer = () => {
    const useStyles = makeStyles({
        footer: {
            textAlign: 'center',
            padding: '2rem',
            width: '100%',
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Typography >Site created by Ivy. Copyright &copy; 2022</Typography>
        </div>
    );
};

export default Footer;