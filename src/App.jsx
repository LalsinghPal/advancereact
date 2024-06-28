import React, { useState } from 'react'
import UpdateVariable from './component/UpdateVariable'
import UserState from './component/UserState'
import UseState1 from './component/UseState1'
import HideShowandToggle from './component/HideShowandToggle'
import Props from './component/Props'
import UseEffect from './component/Hooks/UseEffect'
import UseEffect1 from './component/Hooks/UseEffect1'
import UseState3 from './component/Hooks/UseState3'
import CardComponent from './component/CardComponent'
import ConditionalRendering from './component/ConditionalRendering'



function App() {
  let data = "ravi"
  const [count,setCount] = useState(0)
  return (
<>
{/* // <UpdateVariable/>  */}
{/* /* <UserState/> */ }
{/* /* <UseState1/>  */}
{/* /* <HideShowandToggle/>  */}
{/* <Props d={data} c={count} />

<button onClick={()=>setCount(count+1)}>update count</button> */}

{/* <UseEffect/> */}
{/* <UseEffect1/> */}
{/* <UseState3/> */}
<CardComponent/>

{/* <ConditionalRendering/> */}




</>
  )
}

export default App
