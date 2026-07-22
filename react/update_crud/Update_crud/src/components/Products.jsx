 
import React, { useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([
                                        { id: 1, name: "Laptop", price: 900 },
                                        { id: 2, name: "Phone", price: 600 },
                                        { id: 3, name: "Tablet", price: 400 },
                                    ]);
    const updatePrice= (id) =>{
        console.log("insided buttion")
                                setProducts((prev) => {
                                    return prev.map((item) => {
                                        return item.id === id ? {...item, "price": 60 } : item
                                    })
                                })
                            }
  return (
    <div>
      {
        products.map((product) => {
           return <div key={product.id}>
                {product.name} -  {product.price}
                <button onClick={() => updatePrice(product.id)}>Update</button>
            </div>
        })
      }
    </div>
  )
}

export default Products
