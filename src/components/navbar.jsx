import React from 'react'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../context'

const Navbar = () => {

  const {is_low_enough, set_is_low, toggle} = useContext(Context)
  
  window.addEventListener("scroll", set_is_low)

  return (

    <div className={is_low_enough? 'hide': 'nav_bar'}>
        <ul className='nav_li'>
            <li className='nav_elements'><a href='#home' className='nav_link'>Home</a></li>
            <li className='nav_elements'><a href='#skills' className='nav_link'>Skills</a></li>
            <li className='nav_elements'><a href='#myproj' className='nav_link'>Projects</a></li>
            <li className='nav_elements'><a href='#contact' className='nav_link'>Socials</a></li>
        </ul>
        <div className="dark_toggle">
          <input type='checkbox' name='checkbox' id='toggle'></input>
          <label htmlFor="toggle" className='toggle_label' onClick={toggle}></label>
        </div>
    </div>
  )
}

export default Navbar