import React from 'react'

function UpdateVariable() {
    let data = "ram"
    const updateData =(a)=>{
        let data ="raj"
        alert(data)
    }
    console.log("render component")
  return (
  <>

  <h1>updatevariable {data}</h1>
  <button onClick={updateData}>updateData</button>

  </>
  )
}

export default UpdateVariable
