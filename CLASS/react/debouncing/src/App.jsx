import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
    const [products, setProducts] = useState([]);
    const [searchData, setSearchData] = useState(null);
    const [scrollYData, setScrollY] = useState(null)
    let throttle = false

    let getProducts = async () => {
    let response = await axios.get("https://fakestoreapi.com/products")
    setProducts(response.data)
  }

  let filteredData = () =>{
    console.log("filter running")
      let result = products.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase()) 
    })
    setProducts(result) 
  }
  
//debouncing
	useEffect(() => { 
   let timeout = setTimeout(() => {
    if (searchData!==null) {filteredData()} 
    }, 700)  
    return () => clearTimeout(timeout)
	}, [searchData])

  //throttling
  useEffect(() => {


    let handleScroll = () =>{ 
    if (throttle) return

      throttle = true 
      console.log("scroll triggered!!") 
      setScrollY(window.scrollY)
      console.log(window.scrollY) 

      setTimeout(()=>{
          throttle = false
      }, 5000)

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  useEffect(() => {
		getProducts()
	}, [])


  return (
    <div>
        <h1>Debouncing</h1>
        <input style={{padding:"10px 20px"}} type='text' placeholder='search products' onChange={(e) => setSearchData(e.target.value)}></input>
        {
          products.map((product) => <h3 key={product.id}>{product.title}</h3> )
        }
    </div>
  )
}

export default App
