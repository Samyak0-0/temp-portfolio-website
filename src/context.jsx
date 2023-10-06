// import { createContext } from "react";
import React, { useContext } from 'react'
import { useState, useEffect } from "react";

const Context = React.createContext()

const ContextProvider = ({children}) => {

    const[ is_low_enough, setIs_low_enough ] = useState(false)

    function set_is_low () {
      if(window.scrollY > window.innerHeight*0.7) {
        setIs_low_enough(true)
        setIs_icon_clicked(false)
      } else {
        setIs_low_enough(false)
      }
    }

    const[is_icon_clicked, setIs_icon_clicked] = useState(false)

    const icon_click_toggle = () => {
        setIs_icon_clicked(!is_icon_clicked)
    }



    const [showModal, setShowModal] = useState(false)
    const [selectedSn, setSelectedSn] = useState(0)

    const handleClose = () => {
      setShowModal(false)
    }

    const openModal = (sn) => {
      setSelectedSn(sn)
      setShowModal(true)
    }

    const left_scroll = () => {
      if (selectedSn === 0) {
        setSelectedSn(4)
      } else {
        setSelectedSn(selectedSn - 1)
      }
    }

    const right_scroll = () => {
      if (selectedSn === 4) {
        setSelectedSn(0)
      } else {
        setSelectedSn(selectedSn + 1)
      }
    }


    const [offsetY, setOffSetY] = useState(0)
    const handleScroll = () => setOffSetY(window.pageYOffset)

      useEffect(() => {
          window.addEventListener("scroll", handleScroll)
          return() => window.removeEventListener("scroll", handleScroll)
      },[])

     const [mode, setMode] = useState("")
     const toggle = () => {
      if(!mode) {
        setMode("-light")
        return
      }
      setMode("")
     }

    return <Context.Provider value={{ is_low_enough, set_is_low, is_icon_clicked, icon_click_toggle, showModal, handleClose, openModal, selectedSn, offsetY, right_scroll, left_scroll, mode, toggle }}>
        {children}
    </Context.Provider>
}

export const useGlobalContext = () => {
  return useContext(Context)
}

export {Context, ContextProvider}