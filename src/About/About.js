import React from 'react'
import "./About.css"
import tapsImage from '../Docs/taps.jpg'
import Particles from './../components/Particles/Particles'
function About() {
    return (
        <div className="about" id="about">
           
            <div className='detail'>
              <h2>Hi </h2>
              <h2>I'm Tapendra </h2>
              <h2>Web developer</h2>
              <a className="btn" href="https://cutt.ly/ihrvBG8" target="_blank" download >More about me</a>
            </div>

            

             <div className="pic">
                <img src={tapsImage} />
             </div>

             {/* <Particles 
                  className="BackgroundParticles"
                  params={{ 
                    particles: { 
                      number: { 
                        value: 200, 
                        density: { 
                          enable: true, 
                          value_area: 1000, 
                        } 
                      }, 
                    }, 
                  }} 
              />  */}

              <Particles/>

              
        </div>
    )
}

export default About
