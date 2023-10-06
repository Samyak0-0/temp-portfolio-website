import React from 'react'
import { Context } from '../context'
import { useContext, useState } from 'react'

// HiOutlineHome, TfiMenuAlt, BsCodeSlash, FaBasketballBall, TbMailPlus
import {HiOutlineHome} from 'react-icons/hi'
import {TfiMenuAlt} from 'react-icons/tfi'
import {BsCodeSlash} from 'react-icons/bs'
import {HiOutlinePaintBrush} from 'react-icons/hi2'
import {TbMailPlus} from 'react-icons/tb'

const Listbutton = () => {

  const {is_low_enough, set_is_low, mode} = useContext(Context)

  window.addEventListener("scroll", set_is_low)

  const {is_icon_clicked, icon_click_toggle} = useContext(Context)

  return (

    <div className={is_low_enough? 'lstbut_parent_icon': 'hide'}>


        <a href={`#skills${mode}`} title='Skills'><div className={is_icon_clicked? 'lstbut_icon_skills' : 'lstbut_icon_skills_invisible'}><HiOutlinePaintBrush/></div></a>
        <a href={`#home${mode}`} title='Home'><div className={is_icon_clicked? 'lstbut_icon_home' : 'lstbut_icon_home_invisible'}><HiOutlineHome/></div></a>
        <div className='lstbut_icon_main' onClick={icon_click_toggle}><TfiMenuAlt/></div>

        <a href={`#contact${mode}`} title='Projects'><div className={is_icon_clicked? 'lstbut_icon_socials' : 'lstbut_icon_socials_invisible'}><TbMailPlus/></div></a>
        <a href={`#myproj${mode}`} title='Socials'><div className={is_icon_clicked? 'lstbut_icon_projects' : 'lstbut_icon_projects_invisible'}><BsCodeSlash/></div></a>
        
    </div>
  )
}

export default Listbutton