import React, { useContext } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom';

const ProductPage = () => {
    const {productData,addToCart,buynow}=useContext(CartContext)
    const {products,detailPage}=useContext(CartContext)
    
  return (
    <>
    <div className='productpage' data-aos="fade-up"
     data-aos-duration="3000">
        <div className="main-img">
        <div className="back">
      <Link className='arow' to={'/'}> <FaArrowLeft /></Link>
      </div>
      <div className="image">
      <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"  aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={productData.image} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={productData.image2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={productData.image3} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={productData.image4} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon icon-color" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon icon-color" aria-hidden="true"></span>
            <span className="visually-hidden ">Next</span>
          </button>
        </div>
      </div>
        </div>
        <div className="main-product-div">
          <h1>{productData.title}</h1>
          <h4><span className='text-danger'>&#8377;</span> {productData.price}</h4>
          <h3>Description</h3>
          <p className='desc-color'>{productData.description}</p>
          <div className="button-2">
            <button className='add-to-cart button-width' onClick={()=> addToCart(productData)}>Add To Cart</button>
            <Link to={'buynow'} className='buynow text-center text-decoration-none' onClick={()=>buynow(productData)}>Buy now</Link>
          </div>
        </div>
        
    </div>
    
    </>
  )
}

export default ProductPage