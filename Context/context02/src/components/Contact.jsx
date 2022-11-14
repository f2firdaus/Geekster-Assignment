import React from 'react'
import Navbar from '../Navbar'
import { useSelector } from "react-redux";


const Contact = () => {
  const isLight=useSelector((state)=>state.isLight)
    return (
      <>
            <div>
                <Navbar/>
          <h1 className={isLight? "dark" :"light"} >You can mail me help@geekster.in</h1>
      </div>
            
           
    </>
            )
}

export default Contact