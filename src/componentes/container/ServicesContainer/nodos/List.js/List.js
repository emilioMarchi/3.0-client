import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import './List.css'

import Card from '../Card/Card'

export default function List() {

    const data = [
        {
            id: 0,
            title: 'Desarrollo Web',
            itemDescription: ['Landing page', 'Web business', 'E commerce'],
            img: './img/home-gif-4.gif'
        },
        {
            id: 1,
            title: 'Marketing Digital',
            itemDescription: ['Estudio de mercado', 'Plan de marketing', 'Distribución de contenido'],
            img: './img/home-gif-2.gif'
        },
        {
            id: 2,
            title: 'Contenido de marca',
            itemDescription: ['Gráfica corporativa', 'Condenido multimedia', 'Fotografía corporativa'],
            img: './img/home-gif.gif'
        }
    ]

    return(
        <div className='services-list'> 
        {
            data.map((item)=>{
                return(
                    <Card data={data[item.id]} />
                )
            })
        }
        </div>
    )
}