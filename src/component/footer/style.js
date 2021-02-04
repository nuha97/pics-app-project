import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth:'100%',
    padding:'35px 0px',
    background: '#06A6D0',
  },
  heading: {
      
    fontFamily: 'Comic Sans MS',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '30px',
    lineHeight: '56px',
    
    color: '#FFFFFF',
  
},
}));