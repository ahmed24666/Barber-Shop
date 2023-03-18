import './slider1st.scss'
import React from 'react'
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { BiChevronRight } from 'react-icons/bi';
import { GiMirrorMirror } from 'react-icons/gi';
import { GiComb } from 'react-icons/gi';
import { GiRazor } from 'react-icons/gi';
import { GiTowel } from 'react-icons/gi';
import { BsScissors } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Slider1st = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const scrollRef = useRef(null)
    const scroll = (direction) =>{
        const {current} = scrollRef
        if (direction==='left') {
            current.scrollLeft -=300
        }else{
            current.scrollLeft +=300
        }
    }
    return (
        <div className='Slider1st'>
            <div className="cards" ref={scrollRef}>
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay=''>
                    <div className="icon"><GiComb/></div>
                    <h1>Styling</h1>
                    <p className="para">Keep looking your best with our professional stylists....</p>
                    <Link to='/services' className='link'>
                        <div className="more">
                            <h5>Read more</h5>
                            <BiChevronRight/>
                        </div>
                    </Link>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='100'>
                    <div className="icon"><GiRazor/></div>
                    <h1>Trimming</h1>
                    <p className="para">Looking to try something new with your facial...</p>
                    <Link to='/services' className='link'>
                        <div className="more">
                            <h5>Read more</h5>
                            <BiChevronRight/>
                        </div>
                    </Link>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='200'>
                    <div className="icon"><GiMirrorMirror/></div>
                    <h1>Facial Massage</h1>
                    <p className="para">Try the set of facial and hair procedures...</p>
                    <Link to='/services' className='link'>
                        <div className="more">
                            <h5>Read more</h5>
                            <BiChevronRight/>
                        </div>
                    </Link>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="icon"><BsScissors/></div>
                    <h1>Haircut</h1>
                    <p className="para">Any cut to your taste followed by a...</p>
                    <Link to='/services' className='link'>
                        <div className="more">
                            <h5>Read more</h5>
                            <BiChevronRight/>
                        </div>
                    </Link>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>
                    <div className="icon">< GiTowel/></div>
                    <h1>Shaving</h1>
                    <p className="para">For premium result, at our barbershop, we combine...</p>
                    <Link to='/services' className='link'>
                        <div className="more">
                            <h5>Read more</h5>
                            <BiChevronRight/>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="btns" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <div className="btn" onClick={()=>scroll('left')}><RxDoubleArrowLeft/></div>
                <div className="btn" onClick={()=>scroll('right')}><RxDoubleArrowRight/></div>
            </div>
        </div>
    )
}

export default Slider1st
