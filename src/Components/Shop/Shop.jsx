import React, { useEffect, useState } from 'react'
import Product from './Product/Product';
import { Link } from 'react-router-dom';
import "./Shop.css"
import Button from './Button/Button';


const Shop = () => {
    const[products, setProducts] = useState([]);
    const[item, setItem] = useState(0)
    const[get, setGet] = useState(0)

    const getProducts = async()=>{
          const url= `https://api.spoonacular.com/food/products/search?apiKey=2777352d167849208b58bd3897cbed6e&query=rice&vegetables&number=20`
          const response = await fetch(url);
          const resJson = await response.json();
          setProducts(resJson.products);
    }

    useEffect(()=>{
        getProducts();
    }, [])


    const handleState = ()=>{
      setGet(get + 1)
      setItem(item + 10.00)
    }




  return (
    <>
    <div className='shop'>
      {products.map((items)=>{
        return(
            <div className="shop-items" key={items.id}>
            <img src={items.image} alt="" />
            <b>10.00$</b>
            <b>{items.title.slice(0, 20)}</b>

            <Link to={"/button/" + items.id} style={{textDecoration: "none"}}>
            <div>
              <Button get={get} click={handleState}/>
            </div>
            </Link>
        </div>
        )
      })}
    </div>
    <Product items={item} get={get}/>
    </>
  )
}

export default Shop
