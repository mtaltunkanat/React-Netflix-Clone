import React, { useState } from 'react'
import { homeData } from '../../../dummyData'
import  { Home } from "./Home"
export const Homes = () => {
    const [items, setItems] = useState(homeData)
    return(
     <>
    <section className='home'>
        <Home items={items}/>
    </section>
    <div className="margin"></div>
    </>)
    
      
    
  
}

export default Homes
