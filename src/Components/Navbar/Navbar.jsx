import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-logo">
            <img style={{width:'60px', cursor:'pointer'}} src= {logo} alt="" />
        </div>
        <div>
            <ul className="menus">
                <li>Home</li>
                <li>Explorer</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar