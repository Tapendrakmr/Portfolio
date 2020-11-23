import React from 'react'
import './Card.css'
function Card({imgsrc,projectName,projecturl}) {
    return (
        <div className="card_component">
            <div className="element">
              <img  classname='image' src={imgsrc} width='295px' height='220px' />
              <h3 className='Project_name'>{projectName}</h3>
             <div className='button_css'>
                 
              <a className="btn boxed-btn" href={projecturl} target="_blank" ><span>Reach</span> </a>
                
                
             </div>

            </div>
        </div>
    )
}

export default Card
