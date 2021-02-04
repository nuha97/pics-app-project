import React, {useState , useEffect} from 'react';
import { useDispatch } from 'react-redux'
import {Button, Grid, Typography ,Avatar} from '@material-ui/core';
import useStyles from './style';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

const Setting = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
  
    if(!user) history.push('/');

    const logout = () => {
      dispatch({ type: 'LOGOUT' });
      history.push('/');
      setUser(null);
    };
  
    useEffect(() => {
      const token = user?.token;
      if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        
        <Grid container  className={classes.mainContainer} >
        
        <Grid item xs={6} sm={2} >
        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0).toUpperCase()}</Avatar>
        </Grid>
        <Grid item xs={6} sm={5} > 
          <div><Typography className={classes.userName} variant="h5">{user?.result.name}</Typography></div>
          <Typography className={classes.userBio} variant="h6">{user?.result.bio}</Typography>
          <Link to ={`/userSetting/${user?.result.userName}`}><Typography  variant="h6" className={classes.setting}>Setting</Typography></Link>
        </Grid>
       
        <Grid item xs={12} sm={5} spacing={2} className="login-side">
        <Link to={`/CreateMemory`}><Button className={classes.buttonMemory}  type="submit" >New Memory</Button></Link>
        <Button className={classes.buttonSetting}  type="submit" onClick={logout} >Log out</Button>
        </Grid>
        </Grid>
        
    )
}

export default Setting;