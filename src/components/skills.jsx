import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import php from '../images/php.png'
import c from '../images/c.png'
import { useGlobalContext } from '../context'


const Skills = () => {
  
  const {mode} = useGlobalContext()

  const[skillz, setSkillz] = useState([{
    language: 'HTML',
    rating: 5,
    icon: '.',
    color: '#f16a30'
  },
  {
    language: 'CSS',
    rating: 4,
    icon: '.',
    color: '#2ea9d2'
  },
  {
    language: 'Javascript',
    rating: 4,
    icon: '.',
    color: '#f7e025'
  },
  {
    language: 'React JS',
    rating: 3,
    icon: '.',
    color: '#15dcfd'
  },
  {
    language: 'PHP',
    rating: 4,
    icon: '.',
    color: '#7b7fb5'
  },
  {
    language: 'C++',
    rating: 5,
    icon: '.',
    color: '#084a86'
  }
  ]);

  const[starRating, setStarRating] = useState(5)
  const[url, setUrl] = useState(html)

  const hover = (event) => {
    let element = document.getElementById(`${event.target.id}`)
    element.style.boxShadow = "none"
    element.style.color = `${event.target.className}`

    let a = event.target.id
    if(a === "HTML") {
      setStarRating(5)
      setUrl(html)
    }
    if(a === "C++") {
      setStarRating(5)
      setUrl(c)
    }
    if(a === "Javascript") {
      setStarRating(4)
      setUrl(javascript)
    }
    if(a === "CSS") {
      setStarRating(4)
      setUrl(css)
    }
    if(a ==="PHP") {
      setStarRating(4)
      setUrl(php)
    }
    if(a === "React JS") {
      setStarRating(3)
      setUrl(react)
    }
    
    
  }
  
  const unhover = (event) => {
    let element = document.getElementById(`${event.target.id}`)
    element.style.boxShadow =  `15px 18px 0px -5px ${event.target.className}80`
    element.style.color = "color"
  }

  return (
    <div id={`skills${mode}`}>
      <div className={`typing${mode}`}>Skills . . .</div>
        <div className='starbar'>
          
          <AiFillStar className={(1<=starRating)? 'star1': 'hide_star'} size='50px'/>
          <AiFillStar className={(2<=starRating)? 'star2': 'hide_star'} size='50px'/>
          <AiFillStar className={(3<=starRating)? 'star3': 'hide_star'} size='50px'/>
          <AiFillStar className={(4<=starRating)? 'star4': 'hide_star'} size='50px'/>
          <AiFillStar className={(5<=starRating)? 'star5': 'hide_star'} size='50px'/>

          <img src ={url} width='100px' />
        </div>
       

      <div className="wrapper">
      
        {
          skillz.map((languages) => {
            return(
             
              <div className={languages.color} id={languages.language} key={languages.color} onMouseEnter={hover} onMouseLeave={unhover} style={{WebkitTextStroke:`1px ${languages.color}`, border: `10px solid ${languages.color}`,
              boxShadow: `15px 18px 0px -5px ${languages.color}80`}}>
                <h1 id={languages.language} >{languages.language}</h1>
                
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills