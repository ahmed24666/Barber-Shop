import React from 'react'
import './logos.scss'
import 'aos/dist/aos.css'
import AOS from 'aos'
import {useEffect} from 'react'
const Logos = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Logos' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
            <div className="image" data-aos="fade-in" data-aos-duration="2000" data-aos-delay=''>
                <img src="images/logos/home3-bg2.jpg" alt="" />
            </div>
            <div className="images" >
                <img src="/images/logos/Untitled-1.webp" alt="" />
                <img src="/images/logos/2.webp" alt="" />
                <img src="/images/logos/3.webp" alt="" />
                <img src="/images/logos/4.webp" alt="" />
                <img src="/images/logos/5.webp" alt="" />
            </div>
        </div>
    )
}

export default Logos
