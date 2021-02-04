import React from 'react';
import { Typography , AppBar } from '@material-ui/core';
import useStyles from './style';
const Footer = () =>{
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h3" className={classes.heading}>pics App - Designed by Nuha</Typography>
        </AppBar>
    )
}

export default Footer