import React from 'react'
import './grid.scss'
import { ImSearch } from 'react-icons/im';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Grid = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Grid' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
            <div className="col">
                <div className="image">
                    <img src="/images/team/team-copyright-7-7.jpg" alt="" />
                    <div className="hide">
                        <div className="button"><ImSearch/></div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="image">
                        <img src="/images/team/team-copyright-5-5.jpg" alt="" />
                        <div className="hide">
                            <div className="button"><ImSearch/></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="image">
                        <img src="/images/team/team-copyright-6-6.jpg" alt="" />
                        <div className="hide">
                            <div className="button"><ImSearch/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="image">
                    <img src="/images/team/team-copyright-8-8.jpg" alt="" />
                    <div className="hide">
                        <div className="button"><ImSearch/></div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="image">
                        <img src="/images/team/team-copyright-1-1.jpg" alt="" />
                        <div className="hide">
                            <div className="button"><ImSearch/></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="image">
                        <img src="/images/team/team-copyright-3-3-1.jpg" alt="" />
                        <div className="hide">
                            <div className="button"><ImSearch/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid
