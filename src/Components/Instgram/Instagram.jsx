import React from 'react'
import './instagram.scss'
import { FiInstagram } from 'react-icons/fi';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Instagram = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='instagram' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
            <div className="row">
                <div className="image">
                    <img src="/images/insta/image-65-copyright-370x370.jpg" alt="" />
                </div>
                <div className="image">
                    <img src="/images/insta/image-70-copyright-370x370.jpg" alt="" />
                </div>
                <div className="image">
                    <img src="/images/insta/image-73-copyright-370x370.jpg" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="image">
                    <img src="/images/insta/image-74-copyright-370x370.jpg" alt="" />
                </div>
                <div className="image">
                    <img src="/images/insta/image-77-copyright-370x370.jpg" alt="" />
                </div>
                <div className="image">
                    <img src="/images/insta/image-84-copyright-370x370.jpg" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="image">
                    <img src="/images/insta/image-90-copyright-370x370.jpg" alt="" />
                </div>
                <div className="image">
                    <img src="/images/insta/team-copyright-1-1-370x370.jpg" alt="" />
                </div>
                <div className="image">
                    <img src="/images/insta/team-copyright-6-6-370x370.jpg" alt="" />
                </div>
            </div>
            <div className="iconCon">
                <div className="button"><FiInstagram/></div>
                <h1>@nelsonaraer</h1>
            </div>
        </div>
    )
}

export default Instagram
