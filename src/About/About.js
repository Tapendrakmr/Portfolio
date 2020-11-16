import React from 'react'
import "./About.css"
import tapsImage from '../Docs/taps.jpg'
function About() {
    return (
        <div className="about">
            <div className='detail'>
              full details
            </div>
             <div className="pic">
                <img src={tapsImage} />
             </div>
        </div>
    )
}

export default About
