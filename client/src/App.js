import React, { useState } from 'react';
import './App.css';
import Chat from './components/chat';

function App() {
  const [chatStart, setChatStart] = useState(false);
  const [name, setName] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    setChatStart(true);
    document.getElementById("form").style.display="none";
}

  return (
    <div className="App">
      <h1>Socket Chat</h1>
      <div id='form'>
          <h2>Get started right now!</h2>
          <p>I want to start chatting with the name: </p>
          <form onSubmit={onSubmitHandler}>
              <input type="text" name='name' onChange={(e) => setName(e.target.value)} value={name}/>
              <input type="submit" value="Start Chatting"/>
          </form>
      </div>
      {chatStart && <Chat name={name}/>}
    </div>
  );
}

export default App;
