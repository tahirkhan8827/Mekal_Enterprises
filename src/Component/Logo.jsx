
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import { useContext, useEffect,useState } from "react";
import { CartContext } from "../CartContext";

const Logo = () => {
  
  const [theme, setTheme] = useState("light");
  const [isNavOpen, setIsNavOpen] = useState(false); // State for navigation toggle
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Update the root attribute whenever the theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  const {number}=useContext(CartContext)
  
  return (
    <div className='logo-div p-2'
    data-aos-anchor-placement="center-center">
        <div className="sub-div d-flex justify-content-between align-items-center">
        <div className="logo-and-product">
        <Link to={'/'} className="text-decoration-none"><h1 className='logo'>Mekal <span className="logo-sub-heading">Enterprises</span></h1></Link>
        
         {/* Menu toggle button for smaller screens */}
         <button
          className="menu-toggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

          {/* Navigation */}
        <div className={`nav ${isNavOpen ? "nav-open" : ""}`}>
          <Link
            to={"product2"}
            className="home text-2 text-decoration-none fs-5"
          >
            T-shirts
          </Link>
          <Link
            to={"product2"}
            className="home text-2 text-decoration-none fs-5"
          >
            Shirts
          </Link>
          <Link
            to={"product2"}
            className="home text-2 text-decoration-none fs-5"
          >
            Mugs
          </Link>
          <Link
            to={"product2"}
            className="home text-2 text-decoration-none fs-5"
          >
            Pillow
          </Link>
        </div>
        </div>
        
        <Link to={'cart'} className='cart-icon'>
          <TiShoppingCart />
        </Link>
        </div>
        <span className='cart-number'>{number}</span>
        <div className="app">
          <header className="app-header">
            <button onClick={toggleTheme}>
              {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
            </button>
          </header>
        </div>
        
    </div>
  )
}

export default Logo