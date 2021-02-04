import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './style.js';
import {createMemory } from '../../../redux/actions/memory'
import Footer from '../../footer/Footer.js';
import Header from '../../header/Header.js';
import { useHistory } from "react-router";

const CreateMemory = () => {
    const [memoryData, setMemoryData] = useState({ title: '', description: '', tags: '', imageFile: '' });
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'))
    const clear = () => {
      setMemoryData({  title:'', description:'', tags:'', imageFile:'' });
    };
    
    if(!user)
    history.push({pathname:"/"})

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(createMemory({...memoryData, user: user?.result?.userName}));
      history.push({pathname:"/MemoryList"})
      clear();
        };
    return (
      <>
      <Header/>
      <div className={classes.mainContainer}>
        <center>
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a new Memory</Typography>
          <TextField name="title" variant="outlined" label="Title" fullWidth  onChange={(e) => setMemoryData({  title: e.target.value })} />
          <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4}  onChange={(e) => {setMemoryData({ ...memoryData, description: e.target.value })}} />
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth onChange={(e) => setMemoryData({ ...memoryData, tags: e.target.value.split(',') })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setMemoryData({ ...memoryData, imageFile: base64 })} /></div>
    
          <Button className={classes.buttonSubmit} style={{ background: '#06A6D0'}} variant="contained" color="primary" size="large" type="submit"  fullWidth>Submit</Button>
          <Button className={classes.buttonSubmit} style={{ background: 'yellow'}} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
      </center>
      </div>
      <Footer/>
      </>
    )
}
 export default CreateMemory;
