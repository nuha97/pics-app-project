import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useStyles from './style.js';
import { TextField, Button, Typography, Paper ,Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../image/mainLogo.png';
import { signup } from '../../redux/actions/user.js';


const SignUp = () =>{
    
    const [userData, setUserData] = useState({ name: '', email: '', userName: '', password: '',phone:'' });
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(userData);
        dispatch(signup(userData));
        history.push({pathname:  "/"})
        setUserData({ name: '', email: '', userName: '', password: '',phone:'' })
    }
    return  (
        <div className={classes.mainContainer}>
        <center>
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <img className={classes.image} src={logo} alt="icon"  />  

          <TextField name="name" variant="outlined" label="fullName" fullWidth onChange={handleChange} />
          <TextField name="email" variant="outlined" label="Email" fullWidth onChange={handleChange}/>
          <TextField name="userName" variant="outlined" label="userName" fullWidth onChange={handleChange} />
          <TextField name="password" variant="outlined" label="password" fullWidth onChange={handleChange} />
          <TextField name="phone" variant="outlined" label="phone" fullWidth onChange={handleChange} />
          <Button className={classes.buttonSubmit} style={{ background: '#06A6D0'}} variant="contained" color="primary" size="large" type="submit"  fullWidth>Sign up</Button>
          <Grid  item xs={12} sm={12} md={12} className={classes.link}>
          <Typography variant="h6">already have an account?<Link to="/">sign in</Link></Typography>

          </Grid>
        </form>
      </Paper>
      </center>
      </div>
);
}

export default SignUp;