import './App.css';
import News from './components/News';
import NavBar from './components/NavBar';
import {Route} from 'react-router-dom';
import NewsDetails from './components/NewsDetails';

function App() {
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


    </div>
  );
}

export default App;
