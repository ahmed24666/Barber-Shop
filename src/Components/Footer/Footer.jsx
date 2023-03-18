import './footer.scss'
import React from 'react'
import { FaMapSigns } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="text">
            <p className="para">ThemeREX © 2023 . All Rights Reserved.</p>
            </div>
            <div className="text">
                <div className="icon"><FaMapSigns/></div>
                <h2>
                128 Winston st, New York
                </h2>
            </div>
            <div className="text">
                <div className="icon"><MdPhone/></div>
                <h2>
                1.800.218.20.20
                </h2>
            </div>
        </div>
    )
}

export default Footer
