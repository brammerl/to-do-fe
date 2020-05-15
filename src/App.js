
import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
} from "react-router-dom";
import './App.css';
import PrivateRoute from './PrivateRoute.js'
import LoginPage from './LoginPage.js'
import SignupPage from './SignupPage.js'
import TodoPage from './TodoPage'

export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

  tokenChange = (myToken) => {
    this.setState({ token: myToken });

    localStorage.setItem('TOKEN', myToken)
  }

  logOut = () => {
    localStorage.clear('TOKEN')

    
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Router>
          <ul>
            {this.state.token && <p>Welcome!</p>}
            {this.state.token && <Link to='/todo'>Go to ToDo List</Link>}
            <br/>
            <br/>
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/signup'>Signup</Link>
            <br/>
            {this.state.token && <button 
            onClick={this.logOut}>LogOut</button>}
          </ul>
          <Switch>
            <Route exact path='/login' render={(routerProps) =>   <LoginPage tokenChange={this.tokenChange} {...routerProps}/>} />

            <Route exact path='/signup' render={(routerProps) =>  <SignupPage tokenChange={this.tokenChange} {...routerProps}/>} />

            <PrivateRoute exact path='/todo' token={this.state.token} render={(routerProps)=> <TodoPage {...  routerProps}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}