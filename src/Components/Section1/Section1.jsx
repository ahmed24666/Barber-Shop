import './Section1.scss'
import React from 'react'
import { FaMapSigns } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { BiChevronRight } from 'react-icons/bi';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Section1 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Section1'>
            <div className="left" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="main-head" >
                    <h1>Service <span>beyond expectation</span></h1>
                    <hr />
                </div>
                <p className="para">Our barbershop is the territory created purely for men who appreciate premium quality, time and flawless look. We'll help you to look stylish and confident in the most discreet way.</p>
                <div className="button">Read more about us</div>
            </div>
            <div className="right" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="item" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="top">
                        <div className="icon"><FaMapSigns/></div>
                        <h3>Location</h3>
                    </div>
                    <p className="para">128 Winston st, Upper West Side, Manhattan,New York, NY 05120</p>
                    <div className="direction">
                        <span>Get Directions</span>
                        <div className="icon"><BiChevronRight/></div>
                    </div>
                    <hr />
                </div>
                <div className="item" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="top">
                        <div className="icon"><MdPhone/></div>
                        <h3>1.800.218.20.20</h3>
                    </div>
                    <p className="para">Monday – Saturday: 9am – 8pmSunday: 9am – 6pm</p>
                </div>
            </div>
        </div>
    )
}

export default Section1
