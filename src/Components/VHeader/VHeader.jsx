import './vHeader.scss'
import React, { useState } from 'react'
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { RxDoubleArrowRight } from 'react-icons/rx';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const VHeader = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const [slide, setSlide] = useState(0)
    const prevSlide=()=>{
        setSlide(slide === 0 ? 2 : slide - 1)
    }
    const nextSlide=()=>{
        setSlide(slide === 2 ? 0 : slide + 1)
    }
    return (
        <div className='VHeader'>
            <div className="cardContainer" style={{transform:`translateX(-${slide * 100}vw)`}}>
                    <div className="card" >
                        <div className="image" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                            <img src="/images/header/slider2-1-copyright.jpg" alt="" />
                        </div>
                        <div className="text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                            <div className="main-head">
                                <h1>Stay <span>Sharp</span></h1>
                                <hr />
                            </div>
                            <p >Nelson is the territory created purely for males who appreciate premium quality, time and flawless look </p>
                            <div className="button">Make an Appointment </div>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                        <div className="image">
                            <img src="/images/header/slider2-2-copyright.jpg" alt="" />
                        </div>
                        <div className="text">
                            <div className="main-head">
                                <h1>New <span>Philosophy</span></h1>
                                <hr />
                            </div>
                            <p className='para'>Nelson is the territory created purely for males who appreciate premium quality, time and flawless look </p>
                            <div className="button">Make an Appointment </div>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                        <div className="image">
                            <img src="/images/header/slider2-3-copyright.jpg" alt="" />
                        </div>
                        <div className="text">
                            <div className="main-head">
                                <h1>Shaves <span>& Trims</span></h1>
                                <hr />
                            </div>
                            <p className='para'>Nelson is the territory created purely for males who appreciate premium quality, time and flawless look </p>
                            <div className="button">Make an Appointment </div>
                        </div>
                    </div>
            </div>
            <div className="btns" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="btn" onClick={prevSlide} ><RxDoubleArrowLeft/></div>
                <div className="btn" onClick={nextSlide}><RxDoubleArrowRight/></div>
            </div>
       </div>
    )
}

export default VHeader
