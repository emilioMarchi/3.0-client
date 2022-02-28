import React from 'react'

import './Card.css'

export default function Card() {
    return(
        <div className='services-card'>
            <div className='services-card-content'>
                <div className='header-card'> 
                    <img src='./img/prueba.png' />
                </div>
                
                <div className='body-card'>
                    <h3>Titulo card</h3>
                    <h4>Item uno descripcion<br/>Item dos descripcion</h4>
                    <h3 className='price'><b>$</b>999</h3>
                </div>
            </div>
        </div>
    )
}