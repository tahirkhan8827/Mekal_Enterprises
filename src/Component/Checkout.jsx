import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';


const Checkout = () => {
    const {CheckoutItem,total} = useContext(CartContext);
    
  return (
    <div className='checkout-div w-75 mx-auto my-5 position-relative' data-aos="zoom-out">
        
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
            {CheckoutItem.map((item)=>(
                
                <div key={item.id} className="order-details d-flex">
                    
                    <h4>{item.title}</h4>
                    <p><span className='text-danger'>&#8377;</span> {item.price} /-</p>
                    <p>Quantity:{item.quantity}</p>
                </div>
                
                
            ))}
            <h5>Total:<span className='text-danger'>&#8377;</span> {total} /-</h5>

        </div>
        
    </div>
  )
}

export default Checkout