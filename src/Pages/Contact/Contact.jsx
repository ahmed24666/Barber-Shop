import React from 'react'
import Contacts from '../../Components/CONTACT US/Contacts/Contacts'
import MainHeader from '../../Components/MainHeader/MainHeader'
const Contact = () => {
    return (
        <div>
            <MainHeader h1='Contact Us' h2='Contact Us' link='contact' img='images/home3-bg1.jpg'/>
            <Contacts/>
        </div>
    )
}

export default Contact
