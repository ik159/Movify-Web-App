import React, { Component, useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Nav from './components/Nav';
import About from './components/About';
import TopRom from './components/TopRom';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

function App() {


  return (
    <Router>
      <div className="App">
  <Nav />
     
      
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tvshows" component={TopRom} />
        <Route path="/moviedetails/:id" component={MovieDetails} />
        </Switch>
        

    </div>
    </Router>
  )
}

export default App;
