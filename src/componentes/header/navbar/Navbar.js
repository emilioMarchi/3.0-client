import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='nav'>
            <div className='nav-border'>
                <ul>
                    <li><a href='#section-2'>Servicios</a></li>
                    <li><a href='#section-3'>Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar