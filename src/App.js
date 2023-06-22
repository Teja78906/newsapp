
import './App.css';
import NavBar from './components/NavBar'
import React, { Component } from 'react'
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
          
        <Routes>
  <Route path="/" element={ <News key="general" pageSize={10} country="in" category="general" /> }/>
  <Route path="/Entertainment" element={ <News key="entertainment" pageSize={10} country="in" category="entertainment" />}/>
  <Route path="/Sports" element={ <News key="sports" pageSize={10} country="in" category="sports" />}/>
  <Route path="/Science" element={ <News key="science" pageSize={10} country="in" category="science" />}/>
  <Route path="/About" element={ <About/>}/>
  <Route path="/Business" element={ <News key="business" pageSize={10} country="in" category="business" /> }/>
  <Route path="/General" element={ <News key="science" pageSize={10} country="in" category="general" />}/>
  <Route path="/Health" element={ <News key="business" pageSize={10} country="in" category="health" /> }/>
  <Route path="/Technology" element={ <News key="business" pageSize={10} country="in" category="technology" /> }/>
  
</Routes>

        </Router>
      </div>
    )
  }
}
