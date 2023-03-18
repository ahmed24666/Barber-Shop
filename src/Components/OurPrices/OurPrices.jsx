import './ourPrices.scss'
import React, { useRef } from 'react'
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { FaQuoteLeft } from 'react-icons/fa';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const OurPrices = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const scrollRef = useRef(null)
    const scroll=(direction)=>{
        const {current} =scrollRef
        if (direction==='left') {
            current.scrollLeft-=300
        }else{
            current.scrollLeft+=300
        }
    }
    return (
        <div className='OurPrices'>
            <div className="left" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='400'>
                <div className="main-head" >
                    <h1>Our <span>Prices</span></h1>
                    <hr />
                </div>
                <p className="para">Our services spectrum encompasses many techniques and procedures, from straight hairstyling to face care.</p>
                <div className="items">
                    <div className="item">
                        <h1>Haircut</h1>
                        <span>40$</span>
                    </div>
                    <div className="item">
                        <h1>Shave</h1>
                        <span>35$</span>
                    </div>
                    <div className="item">
                        <h1>Haircut + shave</h1>
                        <span>75$</span>
                    </div>
                    <div className="item">
                        <h1>Beard trim</h1>
                        <span>15$</span>
                    </div>
                </div>
                <div className="button">View All Prices</div>
            </div>
            <div className="right">
                <div className="image" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='400'>
                    <img src="images/header/home1-bg2.jpg" alt="" />
                </div>
                <div className="row" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                    <h1>What Clients Say</h1>
                    <div className="details" ref={scrollRef}>
                        <div className="detail">
                            <div className="icon"><FaQuoteLeft/></div>
                            <div className="text">
                                <p className="para">If you are looking for the place to get your first tattoo or piercing, this is the exact place to get the perfect experience.</p>
                                <h3>Harry James</h3>
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon"><FaQuoteLeft/></div>
                            <div className="text">
                                <p className="para">Your works are really nice. I trust your artists and hope that the next piece will be even better than I imagine.</p>
                                <h3>thomas jacson</h3>
                            </div>
                        </div>
                        <div className="detail">
                            <div className="icon"><FaQuoteLeft/></div>
                            <div className="text">
                                <p className="para">If you are looking for the place to get your first tattoo or piercing, this is the exact place to get the perfect experience.</p>
                                <h3>James Dean</h3>
                            </div>
                        </div>
                    </div>
                    <div className="btns">
                        <div className="btn" onClick={()=>scroll('left')}><RxDoubleArrowLeft/></div>
                        <div className="btn" onClick={()=>scroll('right')}><RxDoubleArrowRight/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPrices
