import React, { useState } from 'react';

let MainMenu = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
        <div>
            <button onClick={()=>props.choice("profile")}>profile</button>
            <button onClick={()=>props.choice("fitness")}>fitness</button>
            <button onClick={()=>props.choice("nutrition")}>nutrition</button>
            <button onClick={()=>props.choice("water")}>water</button>
        </div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
    </div>
  );
}

export default MainMenu;