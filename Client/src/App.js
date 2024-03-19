import React from 'react'
import Navbar from './components/Navbar'
import Discription from './components/Discription'
import House from "./image/House.png"
import Work from './components/Work'
import Choose from './components/Choose'
import Community from './components/Community'
import Footer from './components/Footer'
import {motion} from "framer-motion"
function App() {
  return (<>
  <Navbar/>
  <Discription/>
  <motion.div 
  
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 ,delay:.5 }}
  className='p-2 '>
    <img src={House} className='w-full h-auto'/>
  </motion.div>
  <Work/>
  <Choose/>
  <br/><br/>
  <Community/>
  <br/><br/>
  <Footer/>
  </>
  )
}

export default App