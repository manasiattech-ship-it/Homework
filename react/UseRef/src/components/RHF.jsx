import React from 'react'
import { useForm } from 'react-hook-form'

const RHF = () => {
    let {register, handleSubmit, reset, formState: {errors}}= useForm();
 
  return (
<div className='w-80 h-screen'> 
        <form onSubmit={handleSubmit((data) => {console.log(data)})} className='flex flex-col gap-4 p-6 rounded  bg-white' >
            <input {...register("prodname")} type="text" className="p-2 border-gray-400-rounded"  name="prodname" placeholder='product name'></input>
            <input  {...register("price")} type="text"  className="p-2 border-gray-400-rounded"  placeholder='Price'></input>
            <span  {...register("category")} className="p-2 border-gray-400-rounded" >Select Category</span>
            
            <select {...register("category")}   className="p-2 border-gray-400-rounded" >
                <option value="Mens">Mens</option>            
                <option value="women">Women</option>            
                <option value="kids">kids</option>             
            </select>

                <input  {...register("image")} type="text" placeholder='image'></input>
                <button className='p-2 bg-blue-600 text-white rounded'>Create</button>
            </form>
      
        <div>
            <h1>Name =  </h1>
            <h1>category = </h1>
            <h1>image =  </h1>
            <h1>price =  </h1>
        </div>
    </div>
  )
}

export default RHF
