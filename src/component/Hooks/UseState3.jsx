import React, { useState } from 'react'

function UseState3() {
    const [count, setCount] = useState(0)
  return (
   <>
   <p>You clicked {count} time</p>
   <button onClick={()=> setCount(count + 1)}>click me</button>
   

   </>
  )
}

export default UseState3
