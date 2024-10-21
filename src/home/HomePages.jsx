import React ,{ useState } from 'react'
import  Homes  from '../components/header/homes/Homes'
import Upcomming from '../components/header/Upcomming/Upcomming'
import { latest, recommended, upcome } from '../dummyData'
import Trending from '../components/header/trending/Trending'



export const HomePages = () => {
    const [items, setitems] = useState(upcome)
    const [item, setitem] = useState(latest)
    const [rec, setrec] = useState(recommended)
    return( 
    <>
     <Homes />
     <Upcomming items={items} title='Upcomming Movies'/>
     <Upcomming items={item} title='Latest Movies'/>
     <Trending />
     <Upcomming items={rec} title='Recommended Movies'/>
      </>
      )
   }     
    

export default HomePages