import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export const Cards = ( {cardHeading, cardDetails, price} ) => {
    return (
                <div class="card-body">
                    <h2 class="card-heading">{cardHeading}</h2>
                    <h4 class="card-price">{price}</h4>
                    <h6 class="card-details">{cardDetails}</h6>
                    <Link to="/booknow" class="card-btn"><button>Book Now</button></Link>
                </div>
    )
}

export default Cards
