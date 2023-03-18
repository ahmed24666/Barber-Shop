import './single.scss'
import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import MainHeader from '../../MainHeader/MainHeader';
import data from './../Team1/data'
import { useParams } from 'react-router';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Single = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { Id } = useParams()
    const stufff = data.find((item)=>item.id == Id)
    return (
        <>
        <MainHeader h2='Our Team' link='team' h1={stufff.title} stuff={stufff.title} img='/images/home2-bg1.jpg'/>
        <div className='Single'>
            <div className="cont">
                <div className="image" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='400'>
                    <img src={stufff.img} alt="" />
                </div>
                <div className="right" data-aos="fade-in" data-aos-duration="2000" data-aos-delay=''>
                    <h1>{stufff.job}</h1>
                    <div className="info">
                        <div className="row">
                            <p className='para'>E-mail:</p>
                            <span className='para'>{stufff.email}</span>
                        </div>
                        <div className="row">
                            <p className='para'>Phone: </p>
                            <span className='para'>	+40 123 45 67</span>
                        </div>
                        <div className="row">
                            <p className='para'>Address: </p>
                            <span className='para'>123, Main Street, Paris, France</span>
                        </div>
                    </div>
                    <div className="ps">
                        <p className='para'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <p className='para'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    </div>
                </div>
            </div>
            <div className="buttons" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='100'>
                <div className="button"><FiFacebook/></div>
                <div className="button"><FiInstagram/></div>
                <div className="button"><FiLinkedin/></div>
                <div className="button"><FiTwitter/></div>
            </div>
        </div>
        </>
    )
}

export default Single