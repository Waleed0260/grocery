import React from 'react'
import offer1 from "./offer1.jpg";
import offer2 from "./offer2.jpg";
import offer3 from "./offer3.jpg";
import "./Cards.css"


const Cards = () => {
  return (
    <div className='cards'>
      <div className="img">
      <img src={offer1} alt="" />
      <img src={offer2} alt="" />
      <img src={offer3} alt="" />
      </div>
    </div>
  )
}

export default Cards
