import React, { useContext, useRef } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart,removeCart,updateQuantity,checkout,total}=useContext(CartContext)
  
  return (
    <div className='cart' data-aos="zoom-in">
        <h1 className='shoping-cart'>Shoping Cart</h1>
        {cart.map((item)=>(
          <div key={item.id} className="cart-items">
            <h4>{item.title}</h4>
            <p><span className='text-danger'>&#8377;</span> {item.price} /-</p>
            <p>Quantity:{item.quantity}</p>
            
            <button onClick={()=> updateQuantity(item.id,item.quantity+1)} className='increase'>+</button>
            <button onClick={()=> updateQuantity(item.id,item.quantity-1)} className='decrease'>-</button>
            <button onClick={()=> removeCart(item.id)} className='remove'>Remove</button>
          </div>
        ))}
        <h2 className='total'>Total: <span className='text-danger'>&#8377;</span> {total}</h2>
        <div className="buttons">
          <Link to={'checkout'}  onClick={()=> checkout(cart)} className='checkout text-center'>CheckOut</Link>
          <Link className='close text-center' to={'/'}>Close</Link>
        </div>
    </div>
  )
}

export default Cart