import React, {useContext} from 'react'
import { ServicesContext } from '../../ServicesContainerProvider';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import './List.css'

import Card from '../Card/Card'


const categoriesData = [
    {
        id: 0,
        title: 'Desarrollo Web',
        itemDescription: ['Landing page', 'Web business', 'E commerce'],
        img: './img/icons/web.png'
    },
    {
        id: 1,
        title: 'Marketing Digital',
        itemDescription: ['Estudio de mercado', 'Plan de marketing', 'Distribución de contenido'],
        img: './img/icons/marketing.png'
    },
    {
        id: 2,
        title: 'Contenido de marca',
        itemDescription: ['Gráfica corporativa', 'Condenido multimedia', 'Fotografía corporativa'],
        img: './img/icons/media.png'
    }
]
export default function List() {
    
    
    return(
        <div className='services-list'> 
        {
            categoriesData.map((item)=>{
                return(
                    <Card data={categoriesData[item.id]} />
                )
            })
        }
        </div>
    )
}