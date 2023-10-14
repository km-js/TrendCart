import React from 'react'
import './Navbar.css'
import cartUrl from '../../images/cart.png';

function Navbar({cartCount}) {
  return (
    <div className='nav-container'>
        <div className='left'>
        <div className='logo'>
            TrendCart
        </div>
        </div>
        
        <div className='right'>
            <div className='cart-container'>
            <img src={cartUrl} alt='cart' />
            <p>{cartCount}</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar