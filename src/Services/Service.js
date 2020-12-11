import React from 'react'
import "./Service.css"

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faBootstrap} from '@fortawesome/free-brands-svg-icons'

import {faNode} from '@fortawesome/free-brands-svg-icons'
import {faPhp} from '@fortawesome/free-brands-svg-icons'
import {fad} from '@fortawesome/free-brands-svg-icons'




function Service() {
    return (
        <div className="service" id="service">
           <center> <h2 className='heading'>Service Provided</h2></center>
            <div className="service_info">
                

                <div className="service__card">
                            <div className="face front">
                                <img  classname='image' src='https://binaryinformatics.com/wp-content/uploads/2019/01/Front-End-Development-with-React.jpg' />
                                <h3 className='Project_name'>Frontend</h3>                          
                            </div>

                            <div className="face back">
                                <h3>Frontend</h3>
                                <p>Hello, I am a Professinal Front End Developer with experience of 3+ Years, I can make any type of website like- Ecommerce, Portfolio, Educational. I have made clones of some popular website like Amazon, Netflix</p>
                                <div className="service__services">
                                    <span><FontAwesomeIcon icon={faHtml5} /></span>
                                    <span><FontAwesomeIcon icon={faCss3} /></span>
                                    <span><FontAwesomeIcon icon={faReact} /></span>
                                    <span><FontAwesomeIcon icon={faBootstrap} /></span>
                                </div>
                            </div>
                        </div>

                  <div className="service__card">
                            <div className="face front">
                                <img  classname='image' src='https://www.developer2hire.com/assets/uploads/hire-backend-developer.jpg' />
                                <h3 className='Project_name'>Backend</h3>                          
                            </div>

                            <div className="face back">
                                <h3>Backend </h3>
                                <p>Hello, I am a Professinal Front End Developer with experience of 3+ Years, I can make any type of website like- Ecommerce, Portfolio, Educational. I have made clones of some popular website like Amazon, Netflix</p>
                                <div className="service__services">
                                    <span><FontAwesomeIcon icon={faNode} /></span>
                                    <span><FontAwesomeIcon icon={faPhp} /></span>
                                </div>

                                
                            </div>
                        </div>


                <div className="service__card">
                            <div className="face front">
                                <img  classname='image' src='https://download.pingcap.com/images/blog/choosing-right-database-for-your-applications.png' width='300px' height='280px' style={{backgroundColor: " #7c6eab"}}/>
                                <h3 className='Project_name'>Database Management</h3>                 
                            </div>

                            <div className="face back">
                                <h3>Database</h3>
                                <p>Hello, I am a Professinal Front End Developer with experience of 3+ Years, I can make any type of website like- Ecommerce, Portfolio, Educational. I have made clones of some popular website like Amazon, Netflix</p>
                                

                            </div>
                        </div>


                

            </div>

            

        </div>
    )
}

export default Service
