import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Header/Navbar';
import Home from './components/Home';
import SignUp from './components/Auth/SignUp';

// import Slider from './components/HeaderSlider/Slider';


const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="page-loader"></div>
        <Router>
          <Switch>
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={SignUp} />

          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
