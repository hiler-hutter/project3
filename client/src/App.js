import './App.css';
import React from 'react';
import News from './components/News';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import {Route} from 'react-router-dom';
import NewsDetails from './components/NewsDetails';

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
  
        <NavBar/>
  
        <Route 
        exact path='/news'
        component={News}
        />
  
        <Route 
        exact path='/news/:id'
        component={NewsDetails}
        />

        <Route 
        exact path='/signup'
        //component={News}
        render={props => <Signup setUser={this.setUser} {...props} />}
        />  

  
  
      </div>
    );

  }
}

export default App;
