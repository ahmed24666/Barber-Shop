import React from 'react'
import Discover from '../../Components/Discover/Discover'
import HTeam from '../../Components/HTeam/HTeam'
import Instagram from '../../Components/Instgram/Instagram'
import OurPrices from '../../Components/OurPrices/OurPrices'
import Section1 from '../../Components/Section1/Section1'
import VHeader from '../../Components/VHeader/VHeader'

const Home = () => {
    return (
        <div>
            <VHeader/>
            <Section1/>
            <Discover/>
            <OurPrices/>
            <HTeam/>
            <Instagram/>
        </div>
    )
}

export default Home
