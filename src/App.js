import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Auth from './components/Auth';
import MainMenu from './components/MainMenu';

function App() {
  const [user,setUser] = useState({auth:false,choice:null});
  let screen = null;
  console.log(user.choice);
  if(user.auth == false){
    screen = <Auth auth={ ()=>setUser({auth:true}) } />;
  }
  else if(user.choice == "fitness"){
    screen = <h1>fitness</h1>;
  }
  else if(user.choice == "nutrition"){
    screen = <h1>nutrion</h1>;
  }
  else if(user.choice == "water"){
    screen = <h1>water</h1>;
  }
  else {
    screen = <MainMenu choice={(choice)=>setUser({auth:true,choice:choice})}/>;
  }
  return (
    <div className="App">
      <header className="App-header">
        
        {screen}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
