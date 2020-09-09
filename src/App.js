import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListUserComponent from './components/user/ListUserComponent';
import AddUserComponent from './components/user/AddUserComponent';

function App() {
  return (
      <div className="container">
            <Router>
                <div className="col-md-6">
                    <h1>User Management App</h1>
                    <Switch>
                        <Route path="/" exact component={ListUserComponent}/>
                        <Route path="/getAllUsers" componenet={ListUserComponent}/>
                        <Route path="/add-user" component={AddUserComponent}/>
                    </Switch>
                </div>
            </Router>
      </div>
  )
}

export default App;
