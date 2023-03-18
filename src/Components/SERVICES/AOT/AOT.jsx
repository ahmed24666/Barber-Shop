import React from 'react'
import './aot.scss'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const AOT = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='AOT'>
            <div className="right" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='100'>
                <div className="main-head" >
                    <h1>About <span>our technology</span></h1>
                    <hr />
                </div>
                <p className="para">Our barbershop is the territory created purely for males who appreciate premium quality, time and flawless look. Welcome to Nelson!</p>
                <div className="button">Read More About Us</div>
            </div>
            <div className="left">
                <div className="image" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>
                    <img src="images/slider1/image-18-copyright.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AOT
