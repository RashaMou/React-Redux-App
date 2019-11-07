import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

// Components
import Films from './components/Films';
import Characters from './components/Characters';
import Places from './components/Places';
import Vehicles from './components/Vehicles';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Home}/>
      <Route path='/films' component={Films}/>
      <Route path='/characters' component={Characters}/>
      <Route path='/places' component={Places}/>
      <Route path='/vehicles' component={Vehicles}/>
      <Footer /> 
    </div>
  );
}

export default App;


