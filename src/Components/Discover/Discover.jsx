import './discover.scss'
import React, { useRef } from 'react'
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { RxDoubleArrowRight } from 'react-icons/rx';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Discover = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const scrollRef = useRef(null)
    const scroll =(direction)=>{
        const {current} = scrollRef
        if (direction==='left') {
            current.scrollLeft -= 400
        }else{
            current.scrollLeft += 400
        }
    }
    return (
        <div className='Discover'>
            <div className="right">
                <div className="main-head" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <h1>Discover Our <span>Works</span></h1>
                    <hr />
                </div>
                <div className="btns" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="btn" onClick={()=>scroll('right')}><RxDoubleArrowRight/></div>
                <div className="btn" onClick={()=>scroll('left')}><RxDoubleArrowLeft/></div>
                </div>
            </div>
            <div className="left">
                <div className="imageCon" ref={scrollRef}>
                    <div className="image" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                        <img src="/images/slider1/image-18-copyright.jpg" alt="" />
                    </div>
                    <div className="image" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>
                        <img src="/images/slider1/image-20-copyright.jpg" alt="" />
                    </div>
                    <div className="image" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='500'>
                        <img src="/images/slider1/image-72-copyright.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover
