import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    margin: '0px 30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth:'96%',
    backgroundColor : '#FFD16F'
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    width: '20%',
    height: '20%'
    
  },
}));