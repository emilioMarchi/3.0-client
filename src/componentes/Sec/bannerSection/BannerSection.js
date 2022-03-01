import React from 'react'
import './BannerSection.css'
import Nodo from './nodos/nodo/Nodo'

export default function BannerSection() {
    return(
        <div className='banner-section'>
            <div className='banner-section-content'>
                <div className='line'></div>
                <h2>Integra a tu marca nuestros servicios</h2>
                <div className='nodo-list'>
                    <Nodo />
                </div>
                <div className='line'></div>
            </div>
        </div>
    )
}