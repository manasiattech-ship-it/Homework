import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import { MyStore } from '../context/MyContext';

const CartScreen = () => {

      let {cartItems} = useContext(MyStore)
  
      if (cartItems.length === 0) {
        return <p>Your cart is empty.</p>;
      }

    return ( 
      <div className='h-screen'>
              {cartItems.map((item) =>  <CartItem item={item}/>
      )}
      </div>
  )
}

export default CartScreen
