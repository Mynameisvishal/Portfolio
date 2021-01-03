import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header__nav">
           <div className="header__brandname">
               Vishal Prakash
           </div>
           <div className="header__sidemenu">
               <button>Home</button>
               <button>About</button>
               <button>Service</button>
               <button>Works</button>
               <button>Contact</button>
           </div>
        </div>
    )
}

export default Header
