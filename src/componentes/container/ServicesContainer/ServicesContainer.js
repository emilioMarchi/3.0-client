import React from 'react'
import './ServicesContainer.css'

import Header from './nodos/Header/Header'
import List from './nodos/List.js/List'

import { ServicesProvider } from './ServicesContainerProvider'

export default function ServicesContainer() {
    return(
        <ServicesProvider>
                <div className='services-container'>
                    <div className='services-content'>
                        <Header />
                        <List/>
                    </div>
                </div>
        </ServicesProvider>
    )
}