import axios from 'axios';
import React, { useCallback, useContext, useEffect } from 'react'
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import CartScreen from './Pages/CartScreen';
import { MyStore } from './context/MyContext';

const App = () => { 
  let {showCart, setCartItems, cartItems} = useContext(MyStore)
  const [products, setProducts] = useState([])
  
  const getProdData = async () => {

    try{
      let res = await axios("https://fakestoreapi.com/products")
      setProducts(res.data)
    }catch(error){
      console.log("error fetching api " + error); 
    }
    
  }
 
  useEffect(() => {getProdData()}, [])

  return (
    
    <div className='h-screen p-2 flex flex-col gap-4'>

      <Navbar />

      {showCart ?             
      <div className='grid grid-cols-5 gap-5'>
      {
        <CartScreen/>
      }
      </div> : 
      <div className='grid grid-cols-5 gap-5'>
      {
        products.map((product) => { 
          let isInCart = cartItems.find((cartItem) => cartItem.id === product.id)
          
          return <ProductCard key={product.id} product={product} isInCart={isInCart}/>
        
        })}
      </div>
      } 
    </div> 
  )
}

export default App
