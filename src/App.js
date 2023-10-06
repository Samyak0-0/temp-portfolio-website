import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Listbutton from './components/listbutton'
import Skills from './components/skills'
import Myproj from './components/myproj'
import Contact from './components/contact'
import Modal from './components/modal'
import { useGlobalContext } from './context'

const App = () => {

  const {showModal} = useGlobalContext()  

  return (
    <div>
          <Navbar />
          <Listbutton />
          <Home />
          <Skills />
          <Myproj />
          {showModal && <Modal />}
          <Contact />
    </div>
  )
}

export default App

