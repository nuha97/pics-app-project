import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(7),
    margin: theme.spacing(10),
    border: '3px solid #DA627D',
    borderRadius: '15px',
    width: '50%',
    position:'center',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
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
    marginRight:'15px',
    color: '#FFFFFF',
    textDecoration:'none'
  },
}));