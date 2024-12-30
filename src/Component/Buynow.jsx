import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'
import { IoIosCloseCircleOutline } from "react-icons/io";


const Buynow = () => {
    const {BuyNow} = useContext(CartContext)
  return (
    <div className='checkout-div border border-3 border-dark w-75 mx-auto my-5 position-relative'>
        <h1 align='center'>CheckOut</h1>
        <Link to={'/'} className='checkout-close-btn'><IoIosCloseCircleOutline /></Link>
        <form className='mx-3 my-5'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Full Name</label>
                        <input required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile No.</label>
                        <input required type="number" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input required type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input required type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">I accept that all the information given above are correct</label>
                    </div>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
        <div className="order mx-3">
            <h1>Your Orders:-</h1>
            
                
                <div className="order-details d-flex justify-content-around border border-1 border-dark m-3 border-radius-3 align-items-center">
                    
                    <h4>{BuyNow.title}</h4>
                    <p><span className='text-danger'>&#8377;</span> {BuyNow.price} /-</p>
                    <p>Quantity:1</p>
                </div>
            <h5>Total: {BuyNow.price} /-</h5>

        </div>
    </div>
  )
}

export default Buynow