import React , {useState,useEffect} from 'react';
import Memory from './Memory';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector ,useDispatch } from 'react-redux';
import useStyles from './style';
import { getMemories} from '../../../redux/actions/memory';

const MemoryList = () => {
    const allMemories = useSelector((state)=>state.memories);
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    //console.log(allMemories);

    useEffect(()=>{
      dispatch(getMemories());
  },[currentId,dispatch])
  
    return (
        !allMemories.length ? <CircularProgress /> : (
            <div className={classes.mainDiv}>
            <Grid container className={classes.mainContainer}  alignItems="stretch" spacing={3}>
              {allMemories.map((memory) => (
                <Grid key={memory._id} item xs={12} sm={4} md={4}>
                  <Memory memory={memory} currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
            </div>
    )
    )
}
 export default MemoryList;