import React, { useState } from 'react'

function UseState1() {
    //Declare a new state variable, which we'll call "count"
    const [count,setCount] = useState(0);

  return (
   <>
   <p>you clicked {count} times</p>
   <button onClick={() => setCount(count + 1)}>Click me</button>
   </>
  )
}

export default UseState1
