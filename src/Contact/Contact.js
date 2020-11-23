import React from 'react'
import "./Contact.css"
import facebook from "../Docs/facebook.png"
import insta from "../Docs/instagram.png"
import Linkedin from "../Docs/linkdin.png"
function Contact() {
    return (
        <div className="contact" id="contact">
           
           <div className="contact_section">
            <div className="heading_disuss">
            Let’s discuss for a project
            </div>
            <div className="para">
              Let's build something together.
            </div>
            
            <a class="boxed-btn3" href="mailto:tapendrakmr786@gmail.com">Write an email</a>
                
            
            <div className="footer">
                
                <center>
                <div className="socialmedia_contact">
                   
                    <ul className="socialmedia">
                        <li className="social" >
                            <a href="https://www.facebook.com/tapendra.kumar.1481" target="_blank">
                             <img src={facebook} height="50px" width="50px"/>
                            </a>
                        </li>
                        <li className="social">
                            <a href="https://www.instagram.com/tapendra690/" target="_blank">
                                <img src={insta} height="50px" width="50px"/>
                            </a>
                        </li>
                        <li className="social">
                            <a href="https://www.linkedin.com/in/tapendra-kumar-76a040165/" target="_blank">
                                 <img src={Linkedin} height="50px" width="50px"/>
                            </a>
                        </li>
                    </ul>
                </div>
                </center>
            </div>
          </div>
          
        </div>
    )
}

export default Contact
