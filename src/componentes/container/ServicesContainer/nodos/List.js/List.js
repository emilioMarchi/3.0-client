import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import './List.css'

import Card from '../Card/Card'

export default function List() {
    return(
        <div className='services-list'> 
            <Card />
            <Card />
            <Card />
        </div>
    )
}