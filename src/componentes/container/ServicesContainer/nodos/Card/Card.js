import React from 'react'

import './Card.css'

export default function Card(props) {
    const item = props.data
    return(
        <div className='services-card'>
            <div className='services-card-content'>
                <div className='header-card'>  
                    <img src={item.img} />
                </div>
                <div className='body-card'>
                    <h3>{item.title}</h3>
                    {
                        (()=>{
                            const items = item.itemDescription
                            return(
                                <h4>{items[0]}<br/>{items[1]}<br/>{items[2]}<br/></h4>
                            )
                        })()
                    }
                </div>
                    <button className='btn button'>Ver soluciones</button>
            </div>
        </div>
    )
}