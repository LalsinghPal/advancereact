import React from 'react'
import './card.css'
import Card from './Card'
import img1 from '../Image/img1.jpg'
import img2 from '../Image/img2.png'
import img3 from '../Image/img3.jpg'
import img4 from '../Image/img4.png'
import img5 from '../Image/img5.png'
import img6 from '../Image/img6.png'

function CardComponent() {
  return (
    <>
    <h1 className='heading'>card Gallery</h1> 
    <div className='cardComp'>
        <Card title="1" img={img1} />
        <Card title="2" img={img2} />
        <Card title="3" img={img3} />
        <Card title="4" img={img4} />
        <Card title="5" img={img5} />
        <Card title="6" img={img6} />
       
    </div>
    
    
    
    
    </>
  )
}

export default CardComponent
