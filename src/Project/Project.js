import React from 'react'
import './Project.css'
import Card from "./Card"
import nodeImage from "../Docs/node_chat.JPG"
function Project() {
    return (
        <div className='project' id ="project">
            <center><h3 className='heading'>Famous Project</h3></center> 
            <div className='project_info'>
              <Card
               imgsrc='https://media-exp1.licdn.com/dms/image/C560BAQFdwVGpSOHmgw/company-logo_200_200/0?e=2159024400&v=beta&t=r6Y4R9o8Br9jZ7CY3Jaz58I8WbObB7nqpFWil-cqxGs'
               projectName='Amazon-Clone'
               projectAbout="This is a exact clone of Amazon- Which provides the same functionality of shopping"
               projecturl="https://tapsclone.firebaseapp.com/"
                style={{left:90, position:'relative'}}

               />
              <Card 
              imgsrc='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=46'
              projectName='Netflix-Clone'
              projectAbout="This is a exact clone of Netflix- Which provides the same experience of watching movies"
              projecturl="https://netflix-clone-3261b.firebaseapp.com/"
              />
              <Card 
              imgsrc='https://icdn3.digitaltrends.com/image/digitaltrends/whatsappweb4-640x640.jpg'
               projectName='WhatsApp_Web-Clone'
               projectAbout="This is a exact clone of Whatsapp Web- Provides ame functionality of chatting"
               projecturl="https://github.com/Tapendrakmr/whatsapp_clone_front"
              />
              <Card 
              imgsrc='https://raw.githubusercontent.com/Tapendrakmr/library-Managment-System/master/lib1.JPG'
              projectName='Library Managment System'
              projectAbout="In this App, We gave you the functionality of managing your library "
              projecturl="https://github.com/Tapendrakmr/library-Managment-System"
              />
              <Card 
              imgsrc={nodeImage}
              projectName='Node Chat-App'
              projectAbout="In this app, You can create separate room and chat with friends"
              projecturl="https://github.com/Tapendrakmr/node-chat-app"
              />
            </div>  
        </div>
    )
}

export default Project
