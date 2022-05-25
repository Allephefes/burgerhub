import React, {useState} from 'react';
import 'bootstrap';

import Button from './components/UI/Button/Button';
import AddUser from './components/Users/AddUser';
import ConnectUser from './components/Users/ConnectUser';
import './App.css';

function App() {
  let [signUp, setSignUp] = useState(false);
  let [signIn, setSignIn] = useState(false);

  const signUpHandler = () => {
    setSignUp(!signUp);
  }
  
  const signInHandler = () => {
    setSignIn(!signIn);
  }

  return (
    <div>
      <div className='expenses'>
        <div className="hub">
          <span>Burger</span>
          <span>hub</span>
        </div>
        {!signUp && !signIn? <Button className='white ml-1' onClick={signUpHandler}>Sign Up</Button> : ''}
        {!signIn && !signUp ? <Button className='white ml-1' onClick={signInHandler}>Log In</Button> : ''}
      </div>
      {signUp ? <AddUser back={signUpHandler}></AddUser> : ''}
      {signIn ? <ConnectUser back={signInHandler}></ConnectUser> : ''}
    </div>
  );
}

export default App;
