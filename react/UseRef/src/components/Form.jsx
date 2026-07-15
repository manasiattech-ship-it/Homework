import React, { useRef, useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({});
    let inpRef = useRef({})
    const [products, setProducts] = useState({})
    console.log("render") 
    console.log(products)  

    let handleSub = (e) => {
        e.preventDefault()
        console.log("in submit")
          console.log(inpRef.current.prodName.value)
          console.log(inpRef.current.image.value)
          console.log(inpRef.current.category.value)
          console.log(inpRef.current.price.value)
            let obj = {pName: inpRef.current.prodName.value,
                        cat: inpRef.current.category.value,
                        img: inpRef.current.image.value,
                        price: inpRef.current.price.value
            }
          setProducts(obj)
    }
  return (
    <div className='w-80 h-screen'>
 
        <form className='flex flex-col gap-4 p-6 rounded  bg-white' onSubmit={handleSub}>
            <input ref={(e) => inpRef.current.prodName = e} type="text" className="p-2 border-gray-400-rounded"  name="prodname" placeholder='product name'></input>
            <input ref={(e) => inpRef.current.price = e}  type="text"  className="p-2 border-gray-400-rounded"  placeholder='Price'></input>
            <span className="p-2 border-gray-400-rounded" >Select Category</span><select  ref={(e) => inpRef.current.category = e}  className="p-2 border-gray-400-rounded" >
                <option value="Mens">Mens</option>            
                <option value="women">Women</option>            
                <option value="kids">kids</option>            
                
                </select>

                <input  ref={(e) => inpRef.current.image = e}  type="text" placeholder='image'></input>
                <button className='p-2 bg-blue-600 text-white rounded'>Create</button>
            </form>
      
        <div>
            <h1>Name = {products.pName}</h1>
            <h1>category = {products.cat}</h1>
            <h1>image = {products.img}</h1>
            <h1>price = {products.price}</h1>
        </div>
    </div>
  )
}

export default Form
