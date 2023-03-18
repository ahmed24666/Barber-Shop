import './hTeam.scss'
import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const HTeam = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='HTeam'>
            <div className="left">
                <div className="main-head" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <h1>Meet The <span>Team</span></h1>
                    <hr />
                </div>
                <div className="buttons" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="button"><FiFacebook/></div>
                    <div className="button"><FiInstagram/></div>
                    <div className="button"><FiLinkedin/></div>
                    <div className="button"><FiTwitter/></div>
                </div>
            </div>
            <div className="right">
                <div className="image" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <img src="/images/team/team-copyright-1-1.jpg" alt="" />
                    <div className="text">
                        <h1>Adam Groover</h1>
                        <p className="para">Professional barber and tattoo master is ready to create your perfect style</p>
                    </div>
                </div>
                <div className="image" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='500'>
                    <img src="/images/team/team-copyright-2-2.jpg" alt="" />
                    <div className="text">
                        <h1>David Hammer</h1>
                        <p className="para">Expert stylist who sticks to the old saying "When you look good you feel good"</p>
                    </div>
                </div>
                <div className="image" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                    <img src="/images/team/team-copyright-3-3-1.jpg" alt="" />
                    <div className="text">
                        <h1>Jenny Wallace</h1>
                        <p className="para">Talented barber working with all hair types, genders, ages and ethnicities</p>
                    </div>
                </div>
                <div className="image" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='500'>
                    <img src="/images/team/team-copyright-9.jpg" alt="" />
                    <div className="text">
                        <h1>Jay Adams</h1>
                        <p className="para">Highly experienced master with all aspects of cutting hair and wet shaving</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HTeam
