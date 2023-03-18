import React from 'react'
import { Link } from 'react-router-dom'
import './mainHeader.scss'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
// images/home3-bg1.jpg
const MainHeader = ({h1,stuff,link,h2,img}) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='MainHeader' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="text" >
                <h1>{h1}</h1>
                <div className="path">
                    <div className="dash"></div>
                    <Link to='/' className='link'>
                        <p className="para">Home</p>
                    </Link>
                    <p className="para">:</p>
                    <Link to={`/${link}`} className='link'>
                    <p className="para active">{h2}</p>
                    </Link>
                    <p className="para active">: {stuff}</p>
                    
                    <div className="dash"></div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader
