import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap';
import './assets/styles.css';

import Home from './components/Home/Home';
import Kitchen from './components/Kitchen/Kitchen';
import Admin from './components/Admin/Admin';

import ProductProvider from './context/Providers/ProductProvider';

function App() {
  return (
    <ProductProvider>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/kitchen'>
        <Kitchen />
      </Route>
      <Route path='/admin'>
        <Admin />
      </Route>
      </ProductProvider>
  );
}

export default App;
