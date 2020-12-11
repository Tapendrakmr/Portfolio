import React from 'react'
import "./About.css"
import tapsImage from '../Docs/taps.jpg'
import Particles from './../components/Particles/Particles'
function About() {
    return (
        <div className="about" id="about">
           
            <div className='detail'>
                <div className="about__myself">
                    <h2>Hi </h2>
                    <h2>I'm Tapendra Kumar</h2>
                    <h2>Web developer</h2>
                    <a className="btn" href="https://cutt.ly/ihrvBG8" target="_blank" download >More About Me</a>

                </div>
            </div>

            

             <div className="pic">
                <img src={tapsImage} />
             </div>


              <Particles/>

          
        
        <div className="wave">
        </div>

              
        </div>
    )
}

export default About
