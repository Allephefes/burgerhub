import React from 'react';
import 'bootstrap';

import Button from './components/UI/Button/Button';
import AddUser from './components/Users/AddUser';
import './App.css';

function App() {
  return (
    <div>
      <div className='expenses'>
        <div className="hub">
          <span>Burger</span>
          <span>hub</span>
        </div>
        <Button className='white'>Burger for Lilos</Button>
      </div>
      <AddUser></AddUser>
    </div>
  );
}

export default App;
