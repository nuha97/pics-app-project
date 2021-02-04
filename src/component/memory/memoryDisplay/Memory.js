import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {deleteMemory} from '../../../redux/actions/memory'
import { Link } from 'react-router-dom';
import useStyles from './style';

const Memory = ({memory ,currentId, setCurrentId}) => {

        const dispatch = useDispatch();
        const classes = useStyles();

      return (
        <Card className={classes.card}>
          
          <CardMedia className={classes.media} image={memory.imageFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={memory.title} />
          
          <div className={classes.overlay}>
            <Typography variant="body2">{moment(memory.date).fromNow()}</Typography>
          </div>
          
          <div className={classes.overlay2}>
            <Link to={`/EditMemory/${memory._id}`}>
            <Button style={{ color: '#FFD16F' }} size="small" onClick={() => setCurrentId(memory._id)}><MoreHorizIcon fontSize="default" /></Button>
            </Link>
          </div>
          
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{memory.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{memory.name}</Typography>
          
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{memory.description}</Typography>
          </CardContent>
          
          <CardActions className={classes.cardActions}>
            <Button size="small" style={{ color: '#06A6D0' }} ><ThumbUpAltIcon fontSize="small" /> Like {memory.likeCount} </Button>
            <Button size="small" style={{ color: '#06A6D0' }} onClick={() => dispatch(deleteMemory(memory._id))} ><DeleteIcon fontSize="small" /> Delete</Button>
          </CardActions>
        
        </Card>
      );
}
 export default Memory;
