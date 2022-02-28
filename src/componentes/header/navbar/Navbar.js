import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='nav'>
            <ul>
                <li><a href='#section-1'>Inicio</a></li>
                <li><a href='#section-2'>Paquetes/Soluciones</a></li>
                <li><a href='#section-3'>Asistencia</a></li>
            </ul>
        </nav>
    )
}

export default Navbar