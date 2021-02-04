import React ,{ useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import useStyles from './style.js';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Typography, Paper ,Grid} from '@material-ui/core';

const UserSetting = () =>{
    const classes = useStyles();
    const history = useHistory();
    const user =  JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    if(!user) history.push('/');

    const handleSubmit = () => {
        history.push('/MemoryList')
    }
   
    return (
        <>
        <Header />
        <div className={classes.mainContainer}>
        <center>
        <Paper className={classes.paper}>
        <Typography className={classes.userName} variant="h5">Profile Data</Typography>
        
        <Grid container  className={classes.mainContainer} >
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Grid item xs={6} sm={6} >   
          <TextField  className={classes.Input} name="userName" variant="outlined" label="username" value = {`${user?.result.userName}`} fullWidth  />
          <TextField  className={classes.Input} name="name" type="text" variant="outlined" label="Name" defaultValue = {user?.result.name} fullWidth />
        </Grid>
        <Grid item xs={6} sm={6} > 
          <TextField  className={classes.Input} name="email" type ="email" variant="outlined" label="email" fullWidth defaultValue = {`${user?.result.email}`} />
          <TextField  className={classes.Input} name="bio" type="text" variant="outlined" label="Bio" fullWidth defaultValue = {`${user?.result.bio?user?.result.bio:"" }`} />         
        </Grid>
        <Button className={classes.buttonSubmit} style={{ background: '#06A6D0'}} variant="contained" color="primary" size="large" type="submit"  >Back to Home</Button>
        </form>
        </Grid>
        
      </Paper>
      </center>
      </div>
      
        <Footer />
        </>
    );
}

export default UserSetting;