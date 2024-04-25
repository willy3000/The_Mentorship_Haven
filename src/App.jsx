import React from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Contacts from './Contacts.jsx'
import Events from './Events.jsx'
import SignUp from "./SignUp"
import './App.css'
import './style.css'
import './footer.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'


function App() {
  
  return (
    
    
     <div className="header-container">
      <Navbar/>
      
      <Routes>
        
        <Route path ='/About' element={<About />}/>
        <Route path ='/Events' element={<Events />}/>
        <Route path ='/SignUp' element={<SignUp />}/>
        <Route path ='/Contacts' element={<Contacts />}/>
        <Route path ='/' element={<Home />}/>
        
      </Routes>
      
      <Footer/>
    </div>
    
  )
}

export default App;
