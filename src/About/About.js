import React from 'react'
import "./About.css"
import tapsImage from '../Docs/taps.jpg'
import Particles from './../components/Particles/Particles'
function About() {
    return (
        <div className="about">
           
            <div className='detail'>
              full details
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
