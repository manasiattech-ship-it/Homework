import React from 'react'

function Product({ id, image, title, description, handleDeleteId }) {
  

  return (
    <div className="w-40 h-60 border-2 bg-red-50 border-solid p-2 overflow-hidden">
      <img src={image} alt={title} className="w-full h-24 object-cover rounded mb-2" />
      <h2 className="text-sm font-semibold">{title}</h2>
      {description && <p className="text-xs text-gray-600 line-clamp-2">{description}</p>}
      <button className="bg-red-500 text-white mt-2 px-2 py-1 rounded " onClick={() => handleDeleteId(id)}>Delete</button>
    </div>
  )
}

export default Product
