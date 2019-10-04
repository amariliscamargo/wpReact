import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import {Router} from "@reach/router";
import SinglePost from './Components/SinglePost'
import QuemSomos from './Components/QuemSomos'
import Contato from './Components/Contato'
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/"/>
          <SinglePost path="/post/:id"/>
          <QuemSomos path="/quem-somos" />
          <Contato path="/contato" />
          <Login path="/login"/>
        </Router>
      </div>
    );
  }
}

export default App;
