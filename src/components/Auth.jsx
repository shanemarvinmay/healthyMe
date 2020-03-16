import React, { useState } from 'react';

let Auth = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
        <div>
            <h1>Login</h1>
            <input />
            <input />
            <button onClick={()=>props.auth()}>login</button>
        </div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
    </div>
  );
}

export default Auth;