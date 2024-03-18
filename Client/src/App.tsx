import React from 'react'
import Navbar from './components/Navbar'
import Discription from './components/Discription'
import house from "../public/House.png"
import Work from './components/Work'
import Choose from './components/Choose'
import Community from './components/Community'
import Footer from './components/Footer'
function App() {
  return (<>
  <Navbar/>
  <Discription/>
  <div className='p-2 '>
    <img src='House.png' className='w-full h-auto'/>
  </div>
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