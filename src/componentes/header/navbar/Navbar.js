import React, {useContext} from 'react'
import './Navbar.css'

import { NavbarContext } from './NavbarContext'

const Navbar = () => {

    const [ state, setState ] = useContext(NavbarContext)

    const handleNav = () => {
        setState(true)
    }

    return(
        <nav className='nav'>
            <div className='nav-border'>
                <ul>
                    <li><a onClick={handleNav} href='#section-1'>Home</a></li>
                    <li><a href='#section-2'>Servicios</a></li>
                    <li><a href='#section-3'>Contacto</a></li>
                </ul>
            </div>
            <div className={state === false ? `nav-mobile` : `nav-mobile d-none`}>
                <ul >
                <li>
                    <a onClick={handleNav} href='#section-1'>Home</a></li>
                    <li><a onClick={handleNav} href='#section-2'>Servicios</a></li>
                    <li><a onClick={handleNav} href='#section-3'>Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar