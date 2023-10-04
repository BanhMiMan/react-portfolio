import React from 'react'
import "./skills.css"
import HTML from '../../assets/htmlicon.png'
import CSS from '../../assets/cssicon.png'
import JS from '../../assets/jsicon.png'
import NodeJS from '../../assets/nodejsicon.png'
import MongoDB from '../../assets/mongodbicon.png'
import GitHub from '../../assets/github-logo.png'
import Expressjs from '../../assets/express.png'
import ReactIcon from '../../assets/React-icon.svg.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>Programming Proficiencies</span>
        <span className='skillDesc'>What I've learned so far, looking to add more to the arsenal...</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={HTML} alt='htmlicon' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>HTML</h2>
                </div>
            </div>
            <div className='skillBar'>
                <img src={CSS} alt='htmlicon' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>CSS</h2>
                </div>
            </div>
            <div className='skillBar'>
                <img src={JS} alt='htmlicon' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>JavaScript</h2>
                </div>
            </div>
            <div className='skillBar'>
                <img src={MongoDB} alt='htmlicon' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>MongoDb</h2>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Expressjs} alt='htmlicon' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Express.js</h2>
                </div>
            </div>
            <div className='skillBar'>
                <img src={ReactIcon} alt='htmlicon' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>React</h2>
                </div>
            </div>
            <div className='skillBar'>
                <img src={NodeJS} alt='htmlicon' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Node.js</h2>
                </div>
            </div>
            <div className='skillBar'>
                <img src={GitHub} alt='htmlicon' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>GitHub</h2>
                </div>
            </div>



        </div>
    </section>
  )
}

export default Skills