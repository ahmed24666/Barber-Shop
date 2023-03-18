import './team1.scss'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import data from './data.jsx'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Team1 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Team1'>
            {data.map((item)=>{
                return(
                    <div className="image" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                        <img src={item.img} alt="" />
                        <div className="hide">
                            <h1>{item.title}</h1>
                            <p className="para">{item.p}</p>
                            <Link to={`/team/stuff/${item.id}`} className='link'>
                                <div className="more">
                                    <h5>Read More</h5>
                                    <BiChevronRight/>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Team1
