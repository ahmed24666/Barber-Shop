import React from 'react'
import MainHeader from '../../Components/MainHeader/MainHeader'
import AOT from '../../Components/SERVICES/AOT/AOT'
import Prices from '../../Components/SERVICES/Prices/Prices'
import Shop from '../../Components/SERVICES/Shop/Shop'
import Slider1st from '../../Components/SERVICES/Slider1st/Slider1st'
import WAHFY from '../../Components/SERVICES/WAHFY/WAHFY'

const Services = () => {
    return (
        <div>
            <MainHeader h1='Our Services' h2='Our Services' link='services' img='images/home3-bg1.jpg'/>
            <AOT/>
            <Slider1st/>
            <Prices/>
            <Shop/>
            <WAHFY img='/images/home3-bg1.jpg'/>
        </div>
    )
}

export default Services
