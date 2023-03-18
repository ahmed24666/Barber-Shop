import React, { useState } from 'react'
import './nav.scss'
import { CgMenuRight } from 'react-icons/cg';
import { TbScissorsOff } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='Nav' id='nav'>
            <div className="left">
                <div className="image">
                    <img src="/images/logo.webp" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="menu" onClick={()=>setOpen(!open)}>{open ? <TbScissorsOff/>: <CgMenuRight/>}</div>
                <div className="list">
                    <NavLink className='link' to='/'>
                    Home
                    </NavLink>
                </div>
                <div className="list">
                    <NavLink className='link' to='/services'>
                    Services
                    </NavLink>
                </div>
                <div className="list">
                    <NavLink className='link' to='/about'>
                    About us
                    </NavLink>
                </div>
                <div className="list">
                    <NavLink className='link' to='/gallery'>
                    Gallery
                    </NavLink>
                </div>
                <div className="list">
                    <NavLink className='link' to='/team'>
                    Team
                    </NavLink>
                </div>
                <div className="list">
                    <NavLink className='link' to='/contact'>
                    Contact
                    </NavLink>
                </div>
                {open&&(
                    <div className='hide'>
                        <div className="menu" onClick={()=>setOpen(!open)}>{open ? <TbScissorsOff/>: <CgMenuRight/>}</div>
                        <div className="list1" onClick={()=>setOpen(!open)}>
                            <NavLink className='link' to='/'>
                            Home
                            </NavLink>
                        </div>
                        <div className="list1" onClick={()=>setOpen(!open)}>
                            <NavLink className='link' to='/services'>
                            Services
                            </NavLink>
                        </div>
                        <div className="list1" onClick={()=>setOpen(!open)}>
                            <NavLink className='link' to='/about'>
                            About us
                            </NavLink>
                        </div>
                        <div className="list1" onClick={()=>setOpen(!open)}>
                            <NavLink className='link' to='/gallery'>
                            Gallery
                            </NavLink>
                        </div>
                        <div className="list1" onClick={()=>setOpen(!open)}>
                            <NavLink className='link' to='/team'>
                            Team
                            </NavLink>
                        </div>
                        <div className="list1" onClick={()=>setOpen(!open)}>
                            <NavLink className='link' to='/contact'>
                            Contact
                            </NavLink>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Nav
