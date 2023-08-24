import React from 'react'
import '../Header/header.scss'
import { useRef } from 'react';
import {FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";

import Logo from '../../assets/images/Latitude Logo.png'
import { Form, useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
    const navRef =useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <div className="header-container">
        <header className='header'>
            <div className="head-logo-wrap">
                <img src={Logo} alt="" href="/portfolio" onClick={()=>navigate("/")}/>
            </div>
            <nav ref={navRef}>
                <a onClick={()=>navigate("/about")}>About</a>
                <a onClick={()=>navigate("/service")}>Service</a>
                <a onClick={()=>navigate("/contactUs")}>Contact US</a>
                <a onClick={()=>navigate("/login")}>Portfolio</a>
                <button className='btn-nav nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
           <button className='btn-nav' onClick={showNavbar}>
            <FaBars/>
           </button>
        </header>
    </div>
  )
}

export default Header