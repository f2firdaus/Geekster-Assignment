// import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Service from './components/Service';
import { useSelector } from "react-redux";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { useState } from 'react';


function App() {
  
  const isLight=useSelector((state)=>state.isLight)
  
  
  return (
    <>
     
 <BrowserRouter>
   
          <p>I have change theme to {isLight ? "Dark" : "Light"}</p>
          <div className={isLight?'dark':''}>
        <Routes>
         
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} /> 
          
          <Route path='/service' element={<Service/>}/>
      </Routes>
      
      </div>
      
     
     
        </BrowserRouter>
        
      </>
  );
}

export default App;
