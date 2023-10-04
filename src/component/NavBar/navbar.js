import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/ae86.png'
import ContactImg from '../../assets/contact.png'
import BurgerMenu from '../../assets/menuIcon.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
        <img src={logo} alt='hamster pic' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> About Me </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'> Skills </Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'> Projects </Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={ContactImg} alt='' className='desktopMenuImg' /> Contact Me </button>



<img src={BurgerMenu} alt='burgerMenu' className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> About Me </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Skills </Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Projects </Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Contact </Link>
        </div>

    </nav>
  )
}

export default Navbar