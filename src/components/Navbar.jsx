import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navBar from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [imgSrc, setImgSrc]= useState(navBar);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };

    const handleClick = () => {
        setImgSrc(p => p === navBar ? close : navBar);
        showSidebar();
    };

    return (
        <>
            <div>
                <Link to='#' className='menu-bars'>
                    <img src={imgSrc} alt='Navigation bar' onClick={handleClick} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <div className='nav-menu-container'>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
