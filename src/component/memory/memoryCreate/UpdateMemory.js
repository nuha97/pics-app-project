import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './style.js';
import {updateMemory} from '../../../redux/actions/memory'
import Footer from '../../footer/Footer.js';
import Header from '../../header/Header.js';
import { useHistory } from "react-router";


const CreateMemory = ({match}) => {
    const [memoryData, setMemoryData] = useState({ title: '', description: '', tags: '', imageFile: '' });
    const memory = useSelector((state) => (match.params.id ? state.memories.find((message) => message._id === match.params.id) : null));
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    
    useEffect(() => {
       
        if (memory) setMemoryData(memory);
      }, [memory]);
    

    const handleChange =(e)=>{
        setMemoryData({...memoryData,[e.target.name]:e.target.value})
    }

    const clear = () => {
      setMemoryData({  title:'', description:'', tags:'', imageFile:'' });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(memoryData);
      dispatch(updateMemory(match.params.id, memoryData));
      history.push({pathname:  "/MemoryList"})
      clear();
        };

    return (
      <>
      <Header/>
      <div className={classes.mainContainer}>
        <center>
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}  onSubmit={handleSubmit}>
          <Typography variant="h6">{`Editing "${memory.title}"`}</Typography>
          <TextField name="title" variant="outlined" label="Title" fullWidth defaultValue ={memory.title} onChange={handleChange} />
          <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} defaultValue ={memory.description} onChange={handleChange} />
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth defaultValue ={memory.tags} onChange={(e) => setMemoryData({ ...memoryData, tags: e.target.value.split(',') })} />
          <img src={memory.imageFile} style={{maxHeight:'300px', maxWidth:'400px'}} alt="memory"/>
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setMemoryData({ ...memoryData, imageFile: base64 })} /></div>
        
          <Button className={classes.buttonSubmit} style={{ background: '#06A6D0'}} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
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
