import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { homeData } from '../../../dummyData'

const SinglePage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = homeData.find((item) => item.id == parseInt(id))
        if(item) {
            setItem(item)
        }
    }, [id])
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
                    <video src="https://youtu.be/4ZEM-bHljfw?feature=shared" controls></video>
                    <div className="para">
                        <h3>Date: {item.date}</h3>
                        <p> {item.desc}</p>
                        <p> {item.desc}</p>
                    </div>
                </div>
            </section>
            </>
        ):null}
      
    </>
  )
}

export default SinglePage
