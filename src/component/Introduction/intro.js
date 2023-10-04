import React from 'react';
import './intro.css';
import bg from '../../assets/takumi.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello!</span>
                <span className='introText'> My name is <span className='introName'>Cody Cao,</span> <br /> a Full-Stack Developer.</span>
                <p className='introPara'>Being recently graduated from the UCF Full-Stack Bootcamp, <br/> I am eager to learn even more and hone my craft to perfection. <br/> My current goal as of now is to create meaningful, <br/> quality applications and projects. <br/>Shoot me an e-mail if you want to collaborate, I enjoy learning new ideas, perspectives and technologies.</p>
                <Link><button className='btn'><img src={btnImg} alt='hireme' className='btnImg' />Hire Me</button></Link>
            </div>
            <img src={bg} alt='Profile'  className='bg'></img>
        </section>
    )
}

export default Intro;