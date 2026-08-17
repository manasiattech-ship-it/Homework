export default function ProductCard({product}) {
	return (
		<div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
			<div className="flex h-64 items-center justify-center bg-gray-50 p-6">
				<img
					src={product.image}
					alt={product.title}
					className="h-full w-full object-contain"
				/>
			</div>

			<div className="p-5">
				<p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
					{product.category}
				</p>

				<h2 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
					{product.title}
				</h2>

				<p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-600">
					{product.description}
				</p>

				<div className="mb-5 flex items-center gap-2">
					<span className="text-yellow-400">★</span>
					<span className="font-semibold">{product.rating.rate}</span>
					<span className="text-sm text-gray-500">
						({product.rating.count})
					</span>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-2xl font-bold">
						${product.price.toFixed(2)}
					</span>

					<button className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}
