import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
          <div>
            <Link to="/"><h1>React Books App</h1></Link>
          </div>
          <div>
            <Link to="/favourites" className='favourite-link'>
                 Your Favourites
            </Link>
           
          </div>
      </div>  
    </>
  );
}

export default Navbar;
