import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import Count from './Count';
import Todos from './Todos';
import Nav from './Nav';

function App() {  

  return (
    <>
      <Router>
        <Nav></Nav>              
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Count} />
        <Route exact path="/todos" component={Todos} />
        <Route path="/about" component={About} />
      </Router>
    </>
  );
}

export default App;
