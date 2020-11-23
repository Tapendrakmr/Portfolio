import React from 'react'
import './Card.css'
function Card({imgsrc,projectName}) {
    return (
        <div className="card_component">
            <div className="element">
              <img  classname='image' src={imgsrc} width='295px' height='220px' />
              <h3 className='Project_name'>{projectName}</h3>
             <div className='button_css'>
                <button className="banner_button">View</button>
                <button className="banner_button">Reach</button>
             </div>

            </div>
        </div>
    )
}

export default Card
