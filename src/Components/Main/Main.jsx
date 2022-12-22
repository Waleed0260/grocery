import React from 'react'
import Heading from './Heading/Heading'
import logo from "./logo.jpg"
import "./Main.css"


const Main = () => {
  return (
    <div className='main'>
        <div className="head">
            <div className="img">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <ul>
                    <li>Shop</li>
                    <li>Offers</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
                <button><b>Become a Seller</b></button>
                <button><b>join</b></button>
            </div>
        </div>
      <Heading title="Groceries Delivered in 90 Minute" text="Get your healthy foods & snacks delivered at your doorsteps all day everyday"/>

    </div>
  )
}

export default Main
