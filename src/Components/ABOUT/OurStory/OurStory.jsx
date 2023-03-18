import './ourStory.scss'
import React, { useState } from 'react'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const OurStory = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [open, setOpen] = useState('2017')
    return (
        <div className='OurStory'>
            <div className="left" data-aos="fade-in" data-aos-duration="2000" data-aos-delay=''>
                <div className="main-head">
                    <h1>Our <span>story</span></h1>
                    <hr />
                </div>
                <div className="buttons" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="button" onClick={()=>setOpen('2017')}>2017</div>
                    <div className="button" onClick={()=>setOpen('2018')}>2018</div>
                    <div className="button" onClick={()=>setOpen('2019')}>2019</div>
                </div>
                {open==='2017'&&(
                <div className="text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                    <p className="para">Lorem ipsum dolor sit amet, eprehenderit adipisicing elit, minim veniam.</p>
                    <p className="para">Quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
                )}
                {open==='2018'&&(
                <div className="text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='200'>
                    <p className="para">Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla.</p>
                    <p className="para">Quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
                )}
                {open==='2019'&&(
                <div className="text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='200'>
                    <p className="para">Quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="para">Quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
                )}
            </div>
            <div className="right" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="image">
                    <img src="images/image-90-copyright-1024x544.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default OurStory
