import React from 'react'
import Gallery1 from '../../Components/GALLERY1/Gallery/Gallery1'
import MainHeader from './../../Components/MainHeader/MainHeader'
import WAHFY from './../../Components/SERVICES/WAHFY/WAHFY'
const Gallery = () => {
    return (
        <div>
            <MainHeader h1='Gallery' h2='Gallery' link='gallery' img='images/home3-bg1.jpg'/>
            <Gallery1/>
            <WAHFY img='/images/home2-bg1.jpg'/>
        </div>
    )
}

export default Gallery
