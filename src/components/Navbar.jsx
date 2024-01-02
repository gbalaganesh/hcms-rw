import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { mainmenuitems } from '../data/menu'
import { GoDotFill } from 'react-icons/go'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState('false');

    return (
        <div>
            <nav>
                <div className='container nav__container'>
                    <ul className={`nav__links  ${isMenuOpen ? 'show__nav' : 'hide__nav'}`}>
                        {
                            mainmenuitems.map(({ pgname, pgpath }, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink onClick={prev => setIsMenuOpen(!prev)} className={({ isActive }) => isActive ? 'active-nav' : ''} to={pgpath}>{pgname}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className='nav__toggle_btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <GoDotFill></GoDotFill>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
