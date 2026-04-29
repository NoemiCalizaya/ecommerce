import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className='flex'>
      <Link to="/">
        <img 
          src="" 
          alt="Logo eCommerce" 
        />
      </Link>
    </div>
  )
}
