import React from 'react'
import './Card.css'
function Card({imgsrc,projectName,projecturl,projectAbout}) {
    return (
        <div className="card_component">
            <div className="element">
              <img  classname='image' src={imgsrc} width='315px' height='230px' />
              <p className='Project_name'>{projectName}</p>
              <p className="project__about">{projectAbout}</p>
             <div className='button_css'>
                 
                <a className="btn boxed-btn" href={projecturl} target="_blank" ><span>Reach</span> </a>
                
                
             </div>

            </div>
        </div>
    )
}

export default Card
