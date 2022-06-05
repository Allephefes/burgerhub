import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap';
import './assets/styles.css';

import Home from './components/Home/Home';
import Kitchen from './components/Kitchen/Kitchen';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/kitchen'>
        <Kitchen></Kitchen>
      </Route>
      </React.Fragment>
  );
}

export default App;
