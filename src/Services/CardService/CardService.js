import React from 'react'
import "./CardService.css"
function CardService({imgsrc,title,tool}) {
    return (
        <div className="service_Card">
            <div className="element">
              <img  classname='image' src={imgsrc} width='295px' height='220px' />
              <h3 className='Project_name'>{title}</h3>
              <hr/>
              <p>{tool}</p>
             

            </div>
        </div>
    )
}

export default CardService
