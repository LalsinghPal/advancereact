import React, { useState } from 'react'
import UpdateVariable from './UpdateVariable'

function UserState() {
    const [data,setData] = useState("ram")

    const updateData = () => {
        setData ("lalsingh")
    }

    const UpdateVariable = (a) =>{
        setData(a)
    }
    console.log("render")
  return (

 <>
 <h1>UseState {data}</h1>

 <button onClick={updateData}>updateData</button>
 <button onClick={()=>setData("raj")}>updateData12</button>
 <button onClick={()=>UpdateVariable("pn")}>updateData</button>


 </>
  )
}

export default UserState
