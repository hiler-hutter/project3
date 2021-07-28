import './App.css';
//import React from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import News from './components/News';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import {Route, Redirect} from 'react-router-dom';
import NewsDetails from './components/NewsDetails';
import Profile from './components/Profile';
//import components from api app.js

import React, { Fragment } from 'react';
import Header from './components/newsApi/Header';
import Formulario from './components/newsApi/Formulario';
import ListadoNoticias from './components/newsApi/ListadoNoticias';
import ApiData from './components/newsApi/ApiData'

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {

    this.setState({

      user: user
    })
  }


  render() {

    return (
      <div className="App">
  
        <NavBar user={this.state.user} setUser={this.setUser}/>

        <ProtectedRoute
          exact path='/news'
          user={this.state.user}
          component={News}
        />
  
       {/*  <Route 
        exact path='/news'
        component={News}
        /> */}
  
        <Route 
        exact path='/news/:id'
        component={NewsDetails}
        />

        <Route 
        exact path='/signup'
        //component={News}
        render={props => <Signup setUser={this.setUser} {...props} />}
        />  

          <Route
          exact path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />

          <Route
          exact path='/profile'
          render={props => <Profile user={this.state.user} setUser={this.setUser} {...props} />}
        />

          <Route
          exact path='/'
          render={props => <ApiData user={this.state.user} setUser={this.setUser} {...props} />}
        />


    
  
      </div>
    );

  }
}

export default App;
