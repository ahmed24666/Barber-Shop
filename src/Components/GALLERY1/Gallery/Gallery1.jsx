import React, { useState } from 'react'
import './gallery1.scss'
import { ImSearch } from 'react-icons/im';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import AOS from 'aos'
const Gallery1 = () => {
    const data = [
        {
            id:1,
            img: '/images/gallery/image-1.jpg',
            Genre:'stuff'
        },
        {
            id:2,
            img: '/images/gallery/image-2.jpg',
            Genre:'work'
        },
        {
            id:3,
            img: '/images/gallery/image-3.jpg',
            Genre:'stuff'
        },
        {
            id:4,
            img: '/images/gallery/image-4.jpg',
            Genre:'work'
        },
        {
            id:5,
            img: '/images/gallery/image-5.jpg',
            Genre:'stuff'
        },
        {
            id:6,
            img: '/images/gallery/image-6.jpg',
            Genre:'work'
        },
        {
            id:7,
            img: '/images/gallery/image-7.jpg',
            Genre:'work'
        },
        {
            id:8,
            img: '/images/gallery/image-8.jpg',
            Genre:'stuff'
        },
        {
            id:9,
            img: '/images/gallery/image-9.jpg',
            Genre:'work'
        },
        {
            id:10,
            img: '/images/gallery/image-10.jpg',
            Genre:'work'
        },
        {
            id:11,
            img: '/images/gallery/image-11.jpg',
            Genre:'stuff'
        },
        {
            id:12,
            img: '/images/gallery/image-12.jpg',
            Genre:'work'
        },
        {
            id:13,
            img: '/images/gallery/image-13.jpg',
            Genre:'stuff'
        },
        {
            id:14,
            img: '/images/gallery/image-14.jpg',
            Genre:'work'
        },
        {
            id:15,
            img: '/images/gallery/image-15.jpg',
            Genre:'stuff'
        },
        {
            id:16,
            img: '/images/gallery/image-16.jpg',
            Genre:'work'
        },
        {
            id:17,
            img: '/images/gallery/image-17.jpg',
            Genre:'stuff'
        },
        {
            id:18,
            img: '/images/gallery/image-18.jpg',
            Genre:'work'
        },
    ]
    const [filter, setFilter] = useState([])
    const [activeGenre, setActiveGenre] = useState('all')
    useEffect(() => {
        filtiration()
        AOS.init();
    }, [])

    const filtiration =()=>{
        setFilter(data)
    }
    // filter  
    useEffect(() => {
        if (activeGenre==='all') {
            setFilter(data)
            return;
        }
        const filtered = data.filter((data)=>data.Genre.includes(activeGenre))
        setFilter(filtered)
    }, [activeGenre])
    return (
        <div className='Gallery1'>
            <div className="buttons" data-aos="fade-in" data-aos-duration="2000" data-aos-delay=''>
                <div className={activeGenre==='all'? 'button active' : "button"} onClick={()=>setActiveGenre('all')}>all</div>
                <div className={activeGenre==='stuff'? 'button active' : "button"} onClick={()=>setActiveGenre('stuff')}>stuff</div>
                <div className={activeGenre==='work'? 'button active' : "button"} onClick={()=>setActiveGenre('work')}>works</div>
            </div> 

            <div layout className="images">
                {filter.map((item) =>{
                    return (
                        <div className="image" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                            <img src={item.img} alt="" />
                            <div className="hide">
                                <div className="button"><ImSearch/></div>
                            </div>
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default Gallery1
