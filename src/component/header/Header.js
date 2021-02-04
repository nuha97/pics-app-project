import React from 'react';
import { AppBar } from '@material-ui/core'
import logo from '../../image/mainLogo.png';
import useStyles from './style';
const Header = () =>{
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            {/* <Typography className={classes.heading} variant="h2" align="center">Memories</Typography> */}
            <img className={classes.image} src={logo} alt="icon" height="60" />
        </AppBar>
    )
}

export default Header