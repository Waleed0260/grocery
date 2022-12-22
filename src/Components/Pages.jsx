import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Items from './Items/Items'
import Button from './Shop/Button/Button'
import Shop from './Shop/Shop'
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/shop/:type" element={<Items/>}/>
        <Route path="/button/:name" element={<Button/>}/>
      </Routes>
    </div>
  )
}

export default Pages
