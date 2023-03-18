import './prices.scss'
import React from 'react'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Prices = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Prices' data-aos="fade-up" data-aos-duration="2000" data-aos-delay=''>
            <div className="main-head" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                <h1>our <span>prices</span></h1>
                <hr />
            </div>
            <div className="itemsCon" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
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
            </div>
        </div>
    )
}

export default Prices
