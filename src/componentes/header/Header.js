import React, {useState, useContext} from 'react'
import Navbar from './navbar/Navbar'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import { NavbarContext } from './navbar/NavbarContext'

const Header = () => {

    const [state, setState] = useContext(NavbarContext)
    const [navState, setNavState] = useState(false)

    const handleNav = () => {
        state === false ? setState(true) : setState(false)
    }

    return(
        <div className='header'>
            <img src='img/logo.png' className='logo-header' />
            <Navbar navState={navState}/>
            <FontAwesomeIcon onClick={handleNav} className='bar-menu' icon={faBars} />
        </div>
    )
}

export default Header