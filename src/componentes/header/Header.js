import React from 'react'
import Navbar from './navbar/Navbar'
import './Header.css'

const Header = () => {
    return(
        <div className='header'>
            <img src='img/logo.png' className='logo-header' />
            <Navbar/>
        </div>
    )
}

export default Header