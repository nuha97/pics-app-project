import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useStyles from './style.js';
import { TextField, Button, Typography, Paper ,Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../image/mainLogo.png';
import { signin } from '../../redux/actions/user.js';

const LoginForm = () =>{
  const [userData, setUserData] = useState({userName: '', password: ''});
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(userData);
      dispatch(signin(userData));
      history.push("/MemoryList")
      setUserData({userName: '', password: ''})
  }
    return  (
        <div className={classes.mainContainer}>
        <center>
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <img className={classes.image} src={logo} alt="icon"  />  
          <TextField name="userName" variant="outlined" label="username" fullWidth onChange={handleChange} />
          <TextField name="password" type="password" variant="outlined" label="password" fullWidth onChange={handleChange} />
          <Button className={classes.buttonSubmit} style={{ background: '#06A6D0'}} variant="contained" color="primary" size="large" type="submit"  fullWidth>Sign In</Button>
          <Grid  item xs={12} sm={12} md={12} className={classes.link}>
          <Typography variant="h6">Don't have an account?<Link to="/Signup"> sign up now </Link></Typography>

          </Grid>
        </form>
      </Paper>
      </center>
      </div>
);
}

export default LoginForm;