
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      color:'#000000',
    },
  },
    mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  buttonMemory:{
    width: '220px',
    height: '50px',
    background: '#06A6D0',
    fontFamily: 'Comic Sans MS',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '38px',
    marginRight:'15px',
    color: '#FFFFFF',
    textDecoration:'none'

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
  Input: {
    width: '90%',
    margin: '10px 15px',
    color:'#000000'
  },
  buttonSetting:{
    width: '220px',
    height: '50px',
    background: '#DA627D',
    fontFamily: 'Comic Sans MS',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '38px',
    color: '#FFFFFF'
  },
  purple: {
    color: '#ffffff',
    backgroundColor: '#DA627D',
    width: '120px',
    height: '130px',
    left: '114px',
    fontSize:'50px',
    marginTop:'20px'

  },
  leftSide: {
    alignContent:'center',
    marginLeft: '50px'
  },
  userName: {
    fontFamily:'Comic Sans MS',
    fontSize:'27px',
    fontWeight:'bold',
  },
  setting :{
    fontFamily:'Comic Sans MS',
    color:'#06A6D0',
    textDecoration:'none',

  }
}
));