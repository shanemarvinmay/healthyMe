import React, { useState } from 'react';
let handleInput = (e, setWater = ()=>{}) => {
    if(e.keyCode == 13 && e.target.value.length > 0){
        console.log('enter was pressed');
        let num = parseFloat(e.target.value)
        setWater(num);
        e.target.value = '';
    }
    console.log(e.target.value);
};
let WaterMe = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [water, setWater] = useState(0);
  let input = 0;
    /**
     * TODO: retrieve info from firebase
     * TODO: when user hits enter, submit water
     */
  return (
    <div>
        <div>
            <p>waterMe icon</p>
            <p>{water}</p>
            <input onKeyUp={(e)=>handleInput(e, (num)=>setWater(water + num))} type={"number"} />
            {/* <button onClick={()=>setWater(input)}>login</button> */}
        </div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
    </div>
  );
}

export default WaterMe;