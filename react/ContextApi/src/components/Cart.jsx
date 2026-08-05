const Cart = ({ cartProducts }) => {
  const subtotal = cartProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">
          Shopping Cart ({cartProducts.length})
        </h1>

        {cartProducts.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-5">
            {cartProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex items-center gap-5 border-b pb-5"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1">
                  <h2 className="font-semibold line-clamp-2">
                    {product.title}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>

                  <p className="text-yellow-500">
                    ⭐ {product.rating.rate}
                  </p>
                </div>

                <div className="text-xl font-bold text-green-600">
                  ${product.price}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Checkout Summary */}
      <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
        <h2 className="text-2xl font-bold mb-6">
          Order Summary
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Proceed to Checkout
        </button>

        <button
          className="w-full mt-3 border border-gray-300 hover:bg-gray-100 py-3 rounded-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
