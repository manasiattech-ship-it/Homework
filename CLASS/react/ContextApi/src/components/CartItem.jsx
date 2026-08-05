import React from "react";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-zinc-900 rounded-xl p-4 w-full max-w-3xl">

      {/* Product */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-contain rounded-lg bg-white p-2"
        />

        <div>
          <h3 className="text-white text-lg font-semibold">
            {item.name}
          </h3>

          <p className="text-gray-400">
            ${Number(item.price).toFixed(2)}
          </p>
        </div>
      </div>


      {/* Quantity */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onDecrease(item.id)}
          className="bg-gray-700 text-white w-8 h-8 rounded"
        >
          -
        </button>

        <span className="text-white text-lg">
          {item.quantity}
        </span>

        <button
          onClick={() => onIncrease(item.id)}
          className="bg-blue-600 text-white w-8 h-8 rounded"
        >
          +
        </button>
      </div>


      {/* Total */}
      <div className="flex flex-col items-end gap-2">
        <span className="text-white font-bold">
          ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
        </span>

        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
        >
          Remove
        </button>
      </div>

    </div>
  );
};

export default CartItem;