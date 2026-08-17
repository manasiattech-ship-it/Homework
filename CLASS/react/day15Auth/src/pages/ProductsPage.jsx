
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { axiosInstance } from '../config/axiosinstance'

const ProductsPage = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let getProducts = async () =>  {
    try{
    let products = await axiosInstance.get("/products")
    setProducts(products.data)
    setIsLoading(false)
    console.log(products.data)
    }
    catch(error){
      console.log(error)
    }

  }

 useEffect(() => {
    getProducts() 
    console.log(products)
 }, [])  
 if(isLoading) return <h1 className='text-3xl p-4'>Loading products...</h1>
  return (
    <div className='grid grid-cols-4 gap-4'>
      {products.map((product)=>{
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}

export default ProductsPage
