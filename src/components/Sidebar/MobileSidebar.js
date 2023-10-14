import React from 'react'
import './MobileSidebar.css'
import { categories } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MobileSidebar({handleSidebarClick}) {
  return (
    <div className='mobile-main-container'>
    <div className='mobile-sidebar-container'>
    { categories.map(category => (
          <div className='mobile-content-container'>
            <div className='mobile-icons-container' onClick={() => handleSidebarClick(category.name)}>
            <FontAwesomeIcon className="mobile-icon" icon={category.iconUrl} />
            </div> 
             <p className="mobile-name">{category.name.split(' ')[0]}</p>

          </div>
        ))
    }
    </div>
    </div>
  )
}

export default MobileSidebar