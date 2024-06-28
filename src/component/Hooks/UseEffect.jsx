import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [count, setCount] = useState(0)
    const [data, setdata]  = useState(100)

    useEffect(()=>{
        console.log("hello Effect")
    },[])
    console.log(hello)
  return (
    <>
    <p>You Clicked {count}time</p>
    <p>you data {data} time</p>
    <button onClick={() => setCount(count + 1)}>click me</button>
    <button onClick={() => setdata(data + 1)}>click me</button>
  
    
    </>
  )
}

export default UseEffect
