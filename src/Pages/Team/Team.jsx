import React from 'react'
import Team1 from '../../Components/TEAM1/Team1/Team1'
import MainHeader from './../../Components/MainHeader/MainHeader'
import WAHFY from './../../Components/SERVICES/WAHFY/WAHFY'

const Team = () => {
    return (
        <div>
            <MainHeader h1='Our Team' h2='Our Team' link='team' img='images/home3-bg1.jpg'/>
            <Team1/>
            <WAHFY img='/images/home2-bg1.jpg'/>
        </div>
    )
}

export default Team
