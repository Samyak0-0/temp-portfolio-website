import React from 'react'
import { Context } from '../context'
import { useContext } from 'react'
import {FaCircleXmark, FaCircle} from "react-icons/fa6"
import { useGlobalContext } from '../context'

import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"

const Modal = () => {

  const {selectedSn, handleClose, right_scroll, left_scroll} = useGlobalContext()

  const description = [
    {
      sn: 1,
      video_url: "https://www.youtube.com/embed/PYmxcPuOM4Q?si=j0NG-4jm9YCjoLCC",
      project_title: "Team Manager App",
      project_description: "A website to help you or organizations manage, assign and track your teams and the team members.",
      languages_used: "HTML, CSS, JavaScript, React JS",
      website_source: "https://github.com/Samyak0-0/team_member_app",
      website_link: "https://samyak0-0.github.io/team_member_app/"
    },
    {
      sn: 2,
      video_url: "https://www.youtube.com/embed/kFzD1oenqeg?si=ezMrUMfoPt_3fY2e",
      project_title: "Stock Tracker App",
      project_description: "A website to track all of your favorite stocks, find new ones and observe their performances using finnHub API.",
      languages_used: "HTML, CSS, JavaScript, React JS",
      website_source: "https://github.com/Samyak0-0/stock_tracker_app",
      website_link: "https://stock-tracker-app-samyaks-projects.vercel.app/"
    },
    {
      sn: 3,
      video_url: "https://www.youtube.com/embed/HNIGv2RLF5Q?si=EmeyA8ZtI2TbPbP6",
      project_title: "Meals Finder App",
      project_description: "A website to find new meals and search recipes with the help of meals API.",
      languages_used: "HTML, CSS, JavaScript, React JS",
      website_source: "https://github.com/Samyak0-0/meals_finder_app",
      website_link: "https://samyak0-0.github.io/meals_finder_app/"
    },
    {
      sn: 4,
      video_url: "https://www.youtube.com/embed/YCSRQhY3QGQ?si=yKqUU0RMml5Xl-oZ",
      project_title: "Website Tracker Extension",
      project_description: "A chrome extension used for tracking all of your favorite websites.",
      languages_used: "HTML, CSS, JavaScript",
      website_source: "https://github.com/Samyak0-0/websitetracker",
      website_link: "https://samyak0-0.github.io/websitetracker/"
    },
    {
      sn: 5,
      video_url: "https://www.youtube.com/embed/FKNWtSHmQMw?si=1UTLdUlajQk1EW3g",
      project_title: "Black Jack Game",
      project_description: "A simple website to play Black Jack.",
      languages_used: "HTML, CSS, JavaScript",
      website_source: "https://github.com/Samyak0-0/blackjack",
      website_link: "https://samyak0-0.github.io/blackjack/"
    }
  ]

  return (
    <div className='modal_overlay'>
        <div className="modal">
            <div className="mac_tab">
              <FaCircleXmark style={{color: "#ff5f57", cursor: "pointer", margin: "5px 0px 5px 6px"}} size="15px" onClick={handleClose}/>
              <FaCircle style={{color: "#ffbc2f", margin: "5px 0px 5px 6px"}} size="15px"/>
              <FaCircle style={{color: "#28c93f", margin: "5px 0px 5px 6px"}} size="15px"/>
            </div>
            <iframe className="youtube" src={`${description[selectedSn].video_url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <div className="details">
              <div className="project_title">{description[selectedSn].project_title}</div>
              <div className="project_description">Description: {description[selectedSn].project_description}</div><br />
              <div className="languages_used">Languages Used: {description[selectedSn].languages_used}</div><br />
              <div className="modal_links">
                <div><a href={description[selectedSn].website_source} target='_blank'  className="website_source"> Source Code </a></div>
                <div><a href={description[selectedSn].website_link} target='_blank'  className="website_link">Website Link</a></div>
              </div>
            </div>
        </div>
        <div className="left_scroll" onClick={left_scroll}><AiOutlineLeft size="30px"/></div>
        <div className="right_scroll" onClick={right_scroll}><AiOutlineRight size="30px"/></div>
    </div>
  )
}

export default Modal