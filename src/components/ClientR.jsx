import React from 'react'
import './ClientR.css'

export const ClientR = ({img}) => {
  return (
    <div className='ClientR'>
      <div className="images">
        <img src={img} alt="img" />
      </div>

    </div>
  )
}

export default ClientR