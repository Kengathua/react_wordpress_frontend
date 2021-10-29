import logo from './logo.svg';
import './App.css';

import React,{useState, useEffect} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './components/Contact';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Nav />
      <Router>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"/>
        <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/about" component={About} />
          <Route path = "/services" component ={Services}/>
          <Route path = "/blog" component={Blog} />
          <Route path = "/contact" component={Contact} />
          <Route path = "/login" component = {Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
