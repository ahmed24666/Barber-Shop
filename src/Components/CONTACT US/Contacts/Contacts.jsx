import './contacts.scss'
import React from 'react'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Contacts = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Contacts'>
            <div className="cards">
                <div className="card" data-aos="fade-in" data-aos-duration="2000" data-aos-delay=''>
                    <h1>Location</h1>
                    <p className="para">128 Winston st, New York, NY 05120</p>  
                </div>
                <div className="card" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='200'>
                    <h1>Contact Us</h1>
                    <div className="text">
                        <p className="para">Call:</p>
                        <span className="para">1.800.218.20.20</span>
                    </div>
                    <div className="text">
                        <p className="para">Write:</p>
                        <span className="para">hello@example.com</span>
                    </div>    
                </div>
                <div className="card" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='400'>
                    <h1>Working Hours</h1>
                    <p className="para">Mon – Sat: 9am – 8pm Sun: 9am – 6pm</p>    
                </div>
            </div>
            <div className="map" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.266018435694!2d31.417859310767867!3d31.041454962463455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1675376055504!5m2!1sar!2seg" style={{border:'0;'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contacts
