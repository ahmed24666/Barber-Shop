import React from 'react'
import './progress.scss'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Progress = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Progress'>
            <div className="left">
                <div className="main-head" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <h1>why <span>choose nelson</span></h1>
                    <hr />
                </div>
                <div className="text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <h3>graphic</h3>
                    <h4>82%</h4>
                </div>
                <div className="progress1" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'></div>
                <div className="text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <h3>design</h3>
                    <h4>94%</h4>
                </div>
                <div className="progress2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'></div>
                <div className="text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <h3>Success</h3>
                    <h4>87%</h4>
                </div>
                <div className="progress3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'></div>
            </div>
            <div className="right" data-aos="fade-in" data-aos-duration="2000" data-aos-delay=''>
                <div className="image">
                    <img src="images/image-67-copyright.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Progress
