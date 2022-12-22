import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./Items.css"

const Items = () => {
    const[products, setProducts] = useState([]);

    let params = useParams();


    const getProducts = async(name)=>{
          const url= `https://api.spoonacular.com/food/products/search?apiKey=2777352d167849208b58bd3897cbed6e&query=${name}&vegetables&number=20`
          const response = await fetch(url);
          const resJson = await response.json();
          setProducts(resJson.products);
    }

    useEffect(()=>{
        getProducts(params.type);
        console.log(params.type);
    }, [params.type])


    
  return (
    <div className='items'>
            {products.map((items)=>{
        return(
            <div className="shop-items" key={items.id}>
            <img src={items.image} alt="" />
            <b>10.00$</b>
            <b>{items.title.slice(0, 20)}</b>
            <span>Add</span>
        </div>
        )

      })}
    </div>
  )
}

export default Items
