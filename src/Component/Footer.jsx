import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  
  return (
    <div className="containe">
  <footer className="mt-3 py-3">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className=" px-2 navlink fs-3"><FaInstagram /></a></li>
      <li className="nav-item"><a href="#" className=" px-2 navlink fs-3"><FaTwitter /></a></li>
      <li className="nav-item"><a href="#" className=" px-2 navlink fs-3"><FaFacebook /></a></li>
    </ul>
    <p className="text-center copy-right">© 2024 Mekal Enterprises</p>
  </footer>
</div>
  )
}

export default Footer