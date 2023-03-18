import './shop.scss'
import React from 'react'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Shop = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Shop'>
            <div className="cards">
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay=''>
                    <div className="image">
                        <img src="images/shop/product-copyright-1-1-300x300.jpg" alt="" />
                    </div>
                    <h1>Absorptive Brush</h1>
                    <p className="para">Hair shaving brush with bristles made...</p>
                    <h3>$45.00 – $50.00</h3>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='100'>
                    <div className="image">
                        <img src="images/shop/product-copyright-2-2-300x300.jpg" alt="" />
                    </div>
                    <h1>Pine Beard Butter Premium</h1>
                    <p className="para">The finest beard softener and anti-itch...</p>
                    <h3>$95.00</h3>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='200'>
                    <div className="image">
                        <img src="images/shop/product-copyright-4-4-300x300.jpg" alt="" />
                    </div>
                    <h1>Grooming Cream</h1>
                    <p className="para">Created specifically to promote a sense...</p>
                    <h3>$65.00</h3>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="image">
                        <img src="images/shop/product-copyright-5-5-300x300.jpg" alt="" />
                    </div>
                    <h1>Invigorating Soap</h1>
                    <p className="para">Soap made for men with activated...</p>
                    <h3>$55.00</h3>
                </div>
            </div>
        </div>
    )
}

export default Shop
