import React, { useContext } from 'react'
import './Product.css'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const {products,addToCart,detailPage}=useContext(CartContext)
 
  return (
    <div className='cards'>
        
        {products.map((item)=> (
          
          
          <div key={item.id} className="card" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <Link to={'product_page'} className='img'><img onClick={()=> detailPage(item)} src={item.image} alt="" /></Link>
            <div className="item-detail px-2">
              <h3 className='item-title'>{item.title}</h3>
              <h4 className='item-price'><span className='text-danger'>&#8377;</span> {item.price}</h4>
              <button className='add-to-cart' onClick={()=> {addToCart(item);}}>Add To Cart</button>
              
           
            </div>
          </div> 
        ))}
        
    </div>
  )
}

export default ProductList