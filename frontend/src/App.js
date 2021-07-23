import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes/Routes';

import './App.css';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
// import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="page-loader"></div>
        <Navbar />
        <Router history={history}>
          <Routes />
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
