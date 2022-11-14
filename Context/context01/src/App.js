// import { useState } from 'react';
import './App.css';
import Contact from './component/Contact';
import Home from './component/Home';
import Service from './component/Service';
import { contextMain } from './contexts'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [isLight, setIsLight] = useState(false);

  const themeLight = () => {
    setIsLight((current)=>!current)
  }
  
  return (
    <>
     
 <BrowserRouter>
    <contextMain.Provider value={{isLight,themeLight}}>
          <p>I have change theme to {isLight ? "Dark" : "Light"}</p>
          <div className={isLight?'dark':''}>
        <Routes>
         
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} /> 
          
          <Route path='/service' element={<Service/>}/>
      </Routes>
      
      </div>
      
     
      </contextMain.Provider>
        </BrowserRouter>
        
      </>
  );
}

export default App;
