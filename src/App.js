import React  from 'react'
import Profile from './component/profile/Profile'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  CreateMemory  from './component/memory/memoryCreate/CreateMemory';
import  UpdateMemory  from './component/memory/memoryCreate/UpdateMemory';
import LoginForm from './component/user/LoginForm';
import SignUp from './component/user/SignUp';
import UserSetting from './component/profile/UserSetting';

const App = () => {
      let user = JSON.parse(localStorage.getItem('AUTH'));
      console.log(user);
       return (
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm}/>
          <Route path="/signUp"  component={SignUp}/>
          <Route path="/MemoryList"  component={Profile}/>
          <Route path="/CreateMemory"  component={CreateMemory}/>
          <Route path="/EditMemory/:id"  component={UpdateMemory}/>
          <Route path="/userSetting/:user" component={UserSetting}/>
        </Switch>
    
      </Router>  
    )
}

export default App