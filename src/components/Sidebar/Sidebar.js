import React from 'react'
import './Sidebar.css'
import {categories} from '../../data';

function Sidebar({handleSidebarClick}) {
  return (
    <div className='sidebar-container'> 
      {categories.map((category,index)=> (
        <>
          <div className='title-container' onClick={() => handleSidebarClick(category.name)}>
        <a href={`#${category.name}`} className='title' key={index} onClick={() => handleSidebarClick(category.name)}>{category.name}</a>
        </div>
        </>
      ))}
      </div>
  )
}

export default Sidebar