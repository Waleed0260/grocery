import React from 'react'
import "./Heading.css"
import {FaSearch} from "react-icons/fa"
const Heading = ({title, text}) => {
  return (
    <div className='heading'>
       <h1>{title}</h1>
       <p>{text}</p>
       <form action="">
        <input type="text" name="" id="" />
        <div>
            <FaSearch/>
        </div>
       </form>
    </div>
  )
}

export default Heading
