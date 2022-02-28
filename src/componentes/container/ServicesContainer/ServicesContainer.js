import React from 'react'
import './ServicesContainer.css'

import Header from './nodos/Header/Header'
import List from './nodos/List.js/List'

export default function ServicesContainer() {
    return(
        <div className='services-container'>
            <div className='services-content'>
                <Header />
                <List/>
            </div>
        </div>
    )
}