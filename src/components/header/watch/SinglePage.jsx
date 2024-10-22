import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import { homeData, recommended } from '../../../dummyData'
import Upcomming from '../Upcomming/Upcomming'
import "./style.css"


const SinglePage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = homeData.find((item) => item.id === parseInt(id))
        if(item) {
            setItem(item)
        }
    }, [id])
    const [rec, setRec] = useState(recommended)
  return (
    <>
      
        {item ? (
            <>
            <section className="singlePage">
                <div className="singleHeading">
                    <h1>{item.name}</h1>
                    <span>| {item.time} | </span><span>HD</span>
                </div>
                <div className="container">
                <video src="/images/mami.mp4" controls></video>
                    <div className="para">
                        <h3>Date: {item.date}</h3>
                        <p> {item.desc}</p>
                        <p> {item.desc}</p>
                        <p> Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones
                             given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>

                             <p> Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones
                             given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>

                             <p> Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones
                             given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>

                             <p> Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones
                             given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>                           
                    </div>
                    <div className="social">
                        <h3>Share : </h3>
                      <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="" />
                      <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" alt="" />
                      <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" alt="" />
                    </div>
                </div>
            </section>
            <Upcomming items={rec} title='Recommended Movies'/>
            </>
        ):null}
      
    </>
  )
}

export default SinglePage
