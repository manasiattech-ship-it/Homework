import {useContext} from "react"
import {MyStore} from "../context/MyContext"
import CartItem from "./CartItem"

export default function ProductCard({product, isInCart}) {
	let {cartItems, setCartItems, incrementQuantity, decrementQuantity} = useContext(MyStore)

	const handleClick = (product) => {
		setCartItems((prev) => [...prev, {...product, quantity: 1}])
	}

	return (
		<div className="w-64 border rounded-lg shadow p-4">
			<img
				src={product.image}
				alt={product.title}
				className="w-full h-40 object-contain"
			/>

			<h2 className="mt-3 font-semibold text-lg">{product.title}</h2>

			<p className="text-gray-600 text-sm">{product.category}</p>

			<p className="mt-2 font-bold text-xl">${product.price}</p>

			{!isInCart || isInCart.quantity === 0 ? (
				<button
					className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
					onClick={() => handleClick(product)}
				>
					Add to Cart
				</button>
			) : (
				<button className="w-full bg-gray-600 flex items-center justify-center gap-4">
					<span className="text-3xl" onClick={() => decrementQuantity(product.id)}>-</span>
					<span className="text-3xl"></span>
					{isInCart.quantity}
					<span className="text-3xl" onClick={() => incrementQuantity(product.id)}>+</span>
				</button>
			)}
		</div>
	)
}
