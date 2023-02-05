import React from 'react'
import './navbar.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
      <Link to={'/'} className="nav__logoCon">
        <img src="/assets/Logo.svg" alt="logo" className='nav_logo' />
      </Link>
        <ul className='nav_linksCon'>
            <li className='nav_linkCon-links'>Auctions</li>
            <li className='nav_linkCon-links'>Roadmap</li>
            <li className='nav_linkCon-links'>Discover</li>
            <li className='nav_linkCon-links'>Community</li>
        </ul>
        <span className='nav_btnCon'>
            <button className='nav_btnCon-connect'>Contact</button>
            <button className='nav_btnCon-myaccount'>My account</button>
        </span>
        <RxHamburgerMenu size={'30px'} className='nav_menu'/>
    </nav>
  )
}
