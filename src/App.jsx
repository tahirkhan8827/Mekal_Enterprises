import React, { useEffect, useState } from 'react'
import ProductList from './Component/productList'
import Logo from './Component/Logo'
import './App.css'
import Cart from './Component/Cart'
import {products} from './product'
import ProductPage from './Component/ProductPage'
import { CartContext } from './CartContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Checkout from './Component/Checkout'
import Buynow from './Component/buynow'
import Footer from './Component/Footer'
import Thanks from './Component/thanks'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Product2 from './Component/Product2'
import { product1 } from './product1'

const App = () => {
  
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  let [cart,setCart] = useState([]);
  const total = cart.reduce((acc,item)=> acc+ item.price*item.quantity,0);
  // Notification state
  const [notification, setNotification] = useState(null);
  const addToCart = (product)=>{
    setNotification(`Added ${product.title} to cart!`);
    
    setCart((prevCart)=>{
      const itemInCart = prevCart.find((item)=> item.id == product.id); 
      if (itemInCart){
        return prevCart.map((item)=>(
          item.id == product.id ? {...item,quantity: item.quantity+1}:item
          
        ))
      }
      
      
      return [...prevCart, {...product, quantity : 1}]
    })
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  }
  let number =0
  cart.map((item)=> (number += item.quantity))
  // console.log(number)
  const removeCart = (id)=>{
    setCart((prevCart)=> prevCart.filter((item)=> item.id!==id))
  }
  const updateQuantity = (id,quantity)=>{
    setCart((prevCart)=>(
      prevCart.map((item)=>item.id === id ? {...item,quantity:Math.max(1,quantity)}:item)
      
    ))
  }
  
  const [productData,setProductData]= useState([]) 
  const detailPage = (item)=>{
    setProductData(item)

  }
  const [BuyNow, setBuyNow]= useState()
  const buynow = (item)=>{
    setBuyNow(item)
  }
  
  const [CheckoutItem,setCheckoutItem] = useState ()
  const checkout = (item)=>{
    setCheckoutItem(item)
  }
  
  
  return (
    <>
    
    
      <CartContext.Provider value={{product1:product1,number:number,BuyNow:BuyNow,buynow:buynow,checkout:checkout,total:total,CheckoutItem:CheckoutItem,products:products,addToCart:addToCart,detailPage:detailPage,cart:cart,updateQuantity:updateQuantity,removeCart:removeCart,productData:productData}}>
        <BrowserRouter>
          <Logo/>
          
          {/* Show the notification if it's not null */}
          {notification && (
            <div className="notification-popup">
              {notification}
            </div>
          )}
          <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='cart' Component={Cart}/>
            <Route path='product_page' Component={ProductPage}/>
            <Route path='/cart/checkout' Component={Checkout}/>
            <Route path='/product_page/buynow' Component={Buynow}/>
            <Route path='/cart/checkout/thanks' Component={Thanks}/>
            <Route path='product2' Component={Product2}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App