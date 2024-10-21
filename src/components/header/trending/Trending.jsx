import React, {useState} from 'react'
import { trending } from '../../../dummyData';  // Eğer src klasörü altındaysa
import './trending.css'
import Home from '../homes/Home'

const Trending = () => {
    const [items,setItems] = useState(trending)
  return (
    <>
      <section className='trending'>
        <Home items={items} />
      </section>
    </>
  )
}

export default Trending
