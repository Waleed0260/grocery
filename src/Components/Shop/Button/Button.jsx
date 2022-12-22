import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./Button.css"


const Button = ({get, click}) => {
    const[products, setProducts] = useState([]);

    const params = useParams();

    const getProducts = async(name)=>{
        const url= `https://api.spoonacular.com/food/products/${name}?apiKey=2777352d167849208b58bd3897cbed6e&`
        const response = await fetch(url);
        const resJson = await response.json();
        setProducts(resJson.products);
  }

  useEffect(()=>{
      getProducts(params.type);
  }, [params.type])



  return (
    <div className='buttons'>
    <span>{get}</span>
    <span onClick={click}>+</span>
    </div>
  )
}

export default Button
