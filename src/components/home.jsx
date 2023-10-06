import React from 'react'
import lamp_body from '../images/lamp_body.png'
import bulb from '../images/bulb.png'
import alarm_clock_base from '../images/alarm_clock_base.png'
import plant from '../images/plant.png'
import { useGlobalContext } from '../context'


const Home = () => {


  let str_1 = ['H','i','!']
  let str_2 = ['I']
  let str_3 = ['a','m']
  let str_4 = ['S','a','m','y','a','k', ',']
  let str_5 = ['a']
  let str_6 = ['f','r','o','n','t','e','n','d']
  let str_7 = ['w','e','b']
  let str_8 = ['d','e','v','e','l','o','p','e', 'r']


  const {mode} = useGlobalContext()

  return (
    <div id={`home${mode}`}>
      <div className='fancy_setup'>

        <div className="lamp">
          <img src={lamp_body} className='lamp_body'></img>
          <img src={bulb} className='bulb'></img>
          <div className={`lamp_light${mode}`}></div>
        </div>
       

        <div className={`oval_canvas${mode}`}>
          <div className="win_frame_2"></div>
          <div className="win_frame_1"></div>
        </div>

        <div className="desk">

          <div className="desk_frame"></div>
          <div className="edge_1"></div>
          <div className="edge_2"></div>

          <div className="alarm_clock">
            <img src={alarm_clock_base} className='alarm_clock_base'></img>
            <div className="clock_padding">
              <div className="central_dot"></div>
              <div className={`clock_hour_hand${mode}`}></div>
              <div className={`clock_min_hand${mode}`}></div>
              <div className={`clock_sec_hand${mode}`}></div>
            </div>
          </div>

          <div className="plant"><img src={plant} className='plant_pic'></img></div>
        </div>
      </div>


      <div className={`intro${mode}`}>
        <div className={`blob_2${mode}`}></div>
        <div className='description'>
        {
          str_1.map((letter) => {
            return(
              <span className='letters'>{letter}</span>
            )
          })
        }
        <br />
        {
          str_2.map((letter) => {
            return(
              <span className='letters'>{letter}</span>
            )
          })
        }
        <span>&nbsp;</span>
        {
          str_3.map((letter) => {
            return(
              <span className='letters'>{letter}</span>
            )
          })
        }
        <br/>
        {
          str_4.map((letter) => {
            return(
              <span className='letters'>{letter}</span>
            )
          })
        }
        <br />
        {
          str_5.map((letter) => {
            return(
              <span className='letters'>{letter}</span>
            )
          })
        }
        <span>&nbsp;</span>
        {
          str_6.map((letter) => {
            return(
              <span className='letters'>{letter}</span>
            )
          })
        }
        <br />
        {
          str_7.map((letter) => {
            return(
              <span className='letters'>{letter}</span>
            )
          })
        }
        <br />
        {
          str_8.map((letter) => {
            return(
              <span className='letters'>{letter}</span>
            )
          })
        }
        </div>
      </div> 
    </div>
  )
}

export default Home