import React, { useState, useEffect } from 'react'
import team_member_app from '../images/team_member_app.png'
import meals_app from '../images/meals_app.png'
import website_tracker from '../images/website_tracker.png'
import blackjack_app from '../images/blackjack_app.png'
import stock_tracker_app from '../images/stock_tracker_app.png'
import {  useGlobalContext } from '../context'

const Myproj = () => {

  const {openModal, offsetY, mode} = useGlobalContext()

  const rendercards =(axis, direction, rate, project_name, url, sn) => (
    <>
      <div className= {`proj_frame${mode}`} id = {`proj${sn}`} onClick={() => openModal(sn)}
        style={(offsetY>=1500)? {transform: `translate${axis}(${direction}${(offsetY-window.innerHeight*2)*rate}px)`}: {}}>
          <img src={url} className='proj_img' style={{objectPosition: `center ${(window.innerHeight*3-offsetY)*0.07}%`}}/>
          <h4>{project_name}</h4>
        </div>
    </>
  )
 let str_1 = ['P','e','r','s','o','n','a','l']
 let str_2 = ['P','r','o','j','e','c','t','s']

  return (
    <div id={`myproj${mode}`}>
      <h1 className='proj_title'>
        {
          str_1.map((letter) => {
            return(
              <span className={`proj_letters${mode}`}>{letter}</span>
            )
          })
        }
        <span>&nbsp;</span>
        {
          str_2.map((letter) => {
            return(
              <span className={`proj_letters${mode}`}>{letter}</span>
            )
          })
        }
      </h1>
      
      <div className="proj_cards_1">

        {rendercards("X", "-", 0.5, "Team Manager App", team_member_app, 0)}
        {rendercards("Y", "+", 0.5, "Stock Tracker App", stock_tracker_app, 1)}
        {rendercards("X", "+", 0.5, "Meals Finder App", meals_app, 2)}
      </div>
      <div className="proj_cards_2">
        {rendercards("X", "-", 0.8, "Website Tracker Extension", website_tracker, 3)}
        {rendercards("X", "+", 0.8, "BlackJack Game", blackjack_app, 4)}  
        
      </div>
      
    </div>
  )
}

export default Myproj