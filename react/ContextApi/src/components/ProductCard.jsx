const ProductCard = ({ product, setCartProducts }) => {
 
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="font-semibold mt-4">
        {product.title}
      </h2>

      <p className="text-gray-500 text-sm">
        {product.category}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">
          ${product.price}
        </span>

        <span>⭐ {product.rating.rate}</span>
      </div>

      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700" 
      onClick={() => setCartProducts((prev) =>[...prev,product])}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
