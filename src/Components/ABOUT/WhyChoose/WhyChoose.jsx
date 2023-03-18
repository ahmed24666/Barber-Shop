import './whyChoose.scss'
import React, { useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs';
import { RxCrossCircled } from 'react-icons/rx';
import ProgressBar from 'react-progressbar-on-scroll'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const WhyChoose = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [open, setOpen] = useState(false)
    return (
        <div className='WhyChoose'>
            {open&&(
                <div className="hide" >
                    <div className="button" onClick={()=>setOpen(!open)}><RxCrossCircled/></div>
                    <iframe src="https://player.vimeo.com/video/115758738?dnt=1&app_id=122963&autoplay=1" frameborder="0"></iframe>
                </div>
            )}
            <div className="left" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="image">
                    <img src="images/home2-bg1.jpg" alt="" />
                </div>
                <div className="button" onClick={()=>setOpen(!open)}><BsPlayCircle/></div>
                
            </div>
            <div className="right" data-aos="fade-in" data-aos-duration="2000" data-aos-delay=''>
                <div className="main-head" data-aos="fade-in" data-aos-duration="2000" data-aos-delay=''>
                    <h1>Why choose <span>our barbershop?</span></h1>
                    <hr />
                </div>
                <p className="para" data-aos="fade-in" data-aos-duration="2000" data-aos-delay=''>Our barbershop is the territory created purely for males who appreciate premium quality, time and flawless look. At our place, you have a chance to have a really good time.</p>
            </div>
        </div>
    )
}

export default WhyChoose
