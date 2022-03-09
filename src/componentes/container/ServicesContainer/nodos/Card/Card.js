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
                                <div>
                                    <h4>{`${items[0]}`}</h4>
                                    <h4>{`${items[1]}`}</h4>
                                    <h4>{items[2]}</h4>
                                </div>
                            )
                        })()
                    }
                </div>
                    <button className='btn button'>Ver soluciones</button>
            </div>
        </div>
    )
}