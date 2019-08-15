import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Nav from './Nav';

function App() {  

  return (
    <> 
      <BrowserRouter>
        <Nav></Nav>        
      </BrowserRouter>
    </>
  );
}

export default App;
