import React from 'react'
import Navbar from '../Navbar'
import { useContext } from 'react'

import { contextMain } from '../contexts'



const Contact = () => {

  const { isLight } = useContext(contextMain);
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