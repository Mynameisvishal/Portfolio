import React, {useState} from 'react';
import './Header.css';

function Header() {

    const [click, setClick] = useState(false);

    return (
        <div className="header__nav">
           <div className="header__brandname">
               VISHAL
           </div>
           <div className="header__menu">
               <button>Home</button>
               <button>About</button>
               <button>Service</button>
               <button>Works</button>
               <button>Contact</button>
           </div>
           <div onClick={()=>setClick(!click)} className={`header__sidemenu ${click && "show"}`}>
               <div className="header__line"></div>
               <div className="header__line"></div>
               <div className="header__line"></div>
           </div>
        </div>
    )
}

export default Header
