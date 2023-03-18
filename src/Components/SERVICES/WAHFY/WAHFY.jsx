import './wahfy.scss'
import React from 'react'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
// images/home2-bg1.jpg
const WAHFY = ({img}) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='WAHFY' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="text" >
                <div className="main-head" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                    <h1>We're Here <span>For You</span></h1>
                    <hr />
                </div>
                <div className="button">Make An Appointment </div>
            </div>
        </div>
    )
}

export default WAHFY
