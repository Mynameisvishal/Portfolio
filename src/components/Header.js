import React, {useState} from 'react';
import './Header.css';
import vishal from '../images/square.jpg';

function Header({activePage}) {

    const [click, setClick] = useState(false);

    return (
        <React.Fragment>
            <div className="header__nav">
                <div className="header__brandname">
                    {/* <img src={logo} alt="" width="25px" height="25px"/> */}
                    VISHAL
                </div>
                <div className="header__menu">
                    <button onClick={()=>{   document.getElementById('welcome').scrollIntoView({behavior:'smooth',block:"center"});
                    }}
                        className={`${activePage==="welcome" && "active"}`}
                    >Home</button>
                    <button onClick={()=> {document.getElementById('about').scrollIntoView({ behavior:'smooth',block:"center"});}}
                        className={`${activePage==="about" && "active"}`}
                    >About</button>
                    <button onClick={()=> {document.getElementById('services').scrollIntoView({ behavior:'smooth',block:"center"});}}
                         className={`${activePage==="services" && "active"}`}
                    >Service</button>
                    <button onClick={()=> {document.getElementById('work').scrollIntoView({behavior:'smooth',block:"center"});}}
                         className={`${activePage==="work" && "active"}`}
                    >Works</button>
                    <button onClick={()=> {document.getElementById('contact').scrollIntoView({behavior:'smooth',block:"start"});}}
                         className={`${activePage==="contact" && "active"}`}
                    >Contact</button>
                </div>
                <div onClick={()=>setClick(!click)} className={`header__sidemenu ${click && "show"}`}>
                    <div className="header__line"></div>
                    <div className="header__line"></div>
                    <div className="header__line"></div>
                </div>
            </div>
            {click ? <div className={`header__fixed`}>
                <div className={`img ${click && 'show'}`}>
                    <img src={vishal} alt="Vishal"/>
                </div>
                <div className={`menu ${click && 'show'}`}>
                    <button onClick={()=>{   document.getElementById('welcome').scrollIntoView({behavior:'smooth',block:"center"});
                        setClick(false);
                    }}
                        className={`${activePage==="welcome" && "active"}`}
                    >Home</button>
                    <button onClick={()=>{   document.getElementById('about').scrollIntoView({behavior:'smooth',block:"start"});
                        setClick(false);
                    }}
                        className={`${activePage==="about" && "active"}`}
                    >About</button>
                    <button onClick={()=>{   document.getElementById('services').scrollIntoView({behavior:'smooth',block:"start"});
                        setClick(false);
                    }}>Service</button>
                    <button onClick={()=>{   document.getElementById('work').scrollIntoView({behavior:'smooth',block:"start"});
                        setClick(false);
                    }}>Works</button>
                    <button onClick={()=>{   document.getElementById('contact').scrollIntoView({behavior:'smooth',block:"start"});
                        setClick(false);
                    }}>Contact</button>
                </div>

            </div> :"" }
        </React.Fragment>

    )
}

export default Header
