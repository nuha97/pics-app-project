import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      background:'#FFA5AB',
      color:'#000000',
    },
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    background:'#06A6D0',
  },
  paper: {
    padding: theme.spacing(10),
    margin: theme.spacing(10),
    border: '5px solid #FFD16F',
    borderRadius: '15px',
    width: '40%',
    position:'center',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '50%',
    margin: '10px 0',
  },
  buttonSubmit:{
    width: '220px',
    height: '50px',
    fontFamily: 'Comic Sans MS',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '38px',
    marginTop:'30px',
    color: '#FFFFFF',
    textDecoration:'none'
  },
  image: {
    width: '50%',
    height: '50%'
    
  },
  link:{
    marginTop:'20px',
    fontSize:'10px'
  }
}));