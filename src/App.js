
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
const apikey = process.env.REACT_APP_NEWS_API;
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
          
        <Routes>
  <Route path="/newsapp" element={ <News key="startPage" apikey={apikey} pageSize={10} country="in" category="general" /> } />
  <Route path="/" element={ <News key="home" apikey={apikey} pageSize={10} country="in" category="general" /> }/>
  <Route path="/Entertainment" element={ <News key="entertainment" apikey={apikey} pageSize={10} country="in" category="entertainment" />}/>
  <Route path="/Sports" element={ <News key="sports" apikey={apikey} pageSize={10} country="in" category="sports" />}/>
  <Route path="/Science" element={ <News key="science" apikey={apikey} pageSize={10} country="in" category="science" />}/>
  <Route path="/About" element={ <About/>}/>
  <Route path="/Business" element={ <News key="business" apikey={apikey} pageSize={10} country="in" category="business" /> }/>
  <Route path="/General" element={ <News key="general" apikey={apikey} pageSize={10} country="in" category="general" />}/>
  <Route path="/Health" element={ <News key="health" apikey={apikey} pageSize={10} country="in" category="health" /> }/>
  <Route path="/Technology" element={ <News key="technology" apikey={apikey} pageSize={10} country="in" category="technology" /> }/>
  
</Routes>

        </Router>
      </div>
    )
  }
}
