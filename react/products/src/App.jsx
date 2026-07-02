import { useState } from "react"
import Product from "./Product";

function App() { 
  const [input, setInput] = useState(0)
const [fakeProducts, setProducts] = useState([
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://picsum.photos/300/300?random=1",
    price: 99.99,
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Track your fitness, heart rate, and notifications on the go.",
    image: "https://picsum.photos/300/300?random=2",
    price: 149.99,
  },
  {
    id: 3,
    title: "Gaming Mouse",
    description: "Ergonomic RGB gaming mouse with adjustable DPI settings.",
    image: "https://picsum.photos/300/300?random=3",
    price: 49.99,
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and 12-hour battery life.",
    image: "https://picsum.photos/300/300?random=4",
    price: 79.99,
  },
  {
    id: 5,
    title: "Laptop Backpack",
    description: "Water-resistant backpack with padded compartments for laptops.",
    image: "https://picsum.photos/300/300?random=5",
    price: 59.99,
  },
]);
const handleDeleteId = (id) => {
  console.log(id)
    const products = fakeProducts.filter((prod) => prod.id!==id)
    setProducts(products)
}
  return (
    <div className="flex flex-wrap gap-10 mt-40">
      {input}
{fakeProducts.map((prod) => (
  <Product key={prod.id} id={prod.id} image={prod.image} title={prod.title} description={prod.description} handleDeleteId={handleDeleteId}/>
))}
      <button onClick={() => setInput(input + 1)}>Increment</button>
    </div>
  )
}

export default App
