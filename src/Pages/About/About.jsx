import React from 'react'
import OurStory from '../../Components/ABOUT/OurStory/OurStory'
import WhyChoose from '../../Components/ABOUT/WhyChoose/WhyChoose'
import MainHeader from './../../Components/MainHeader/MainHeader'
import HTeam from './../../Components/HTeam/HTeam'
import WAHFY from './../../Components/SERVICES/WAHFY/WAHFY'
import Logos from '../../Components/ABOUT/Logos/Logos'
import Progress from '../../Components/ABOUT/Progress/Progress'

const About = () => {
    return (
        <div>
            <MainHeader h1='About us' h2='About us' link='about' img='images/home3-bg1.jpg'/>
            <OurStory/>
            <WhyChoose/>
            <HTeam/>
            <Logos/>
            <Progress/>
            <WAHFY img='/images/home2-bg1.jpg'/>
        </div>
    )
}

export default About
