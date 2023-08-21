import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import {useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div>
      <nav className="flex items-center h-20 max-w-3xl mx-auto justify-between">
        <NavLink to="/"><div className="ml-5"></div><img className="h-14" src="../logo.png" alt="logo"></img></NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <p>Home</p>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl">
                {
                  cart.length > 0 && <span 
                    className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  100</span>
                }
              </FaShoppingCart>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
