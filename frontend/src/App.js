import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './components/Home';


import './App.css'; import './App.css';
import Navbar from './components/NavBar/Navbar';
import Slider from './components/HeaderSlider/Slider';


const App = () => {
  return (
    <div className="wrapper">
      <Navbar />

      <Router>
        <Switch>
          <Slider />

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
