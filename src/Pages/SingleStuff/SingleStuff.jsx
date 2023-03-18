import React from 'react'
import Grid from '../../Components/TEAM1/Grid/Grid'
import Single from '../../Components/TEAM1/Single/Single'
import Slider1st from '../../Components/SERVICES/Slider1st/Slider1st'
import WAHFY from '../../Components/SERVICES/WAHFY/WAHFY'

const SingleStuff = () => {
    return (
        <div className='SingleStuff'>
            <Single/>
            <Grid/>
            <Slider1st/>
            <WAHFY img='/images/home3-bg1.jpg'/>
        </div>
    )
}

export default SingleStuff
