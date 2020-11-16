import React from 'react'
import './Project.css'
import Card from "./Card"
import nodeImage from "../Docs/node_chat.JPG"
function Project() {
    return (
        <div className='project'>
            <center><h3 className='heading'>Famous Project</h3></center> 
            <div className='project_info'>
              <Card
               imgsrc='https://media-exp1.licdn.com/dms/image/C560BAQFdwVGpSOHmgw/company-logo_200_200/0?e=2159024400&v=beta&t=r6Y4R9o8Br9jZ7CY3Jaz58I8WbObB7nqpFWil-cqxGs'
               projectName='Amazon-Clone'
                style={{left:90, position:'relative'}}
               />
              <Card 
              imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw85Qjp_AvNj96xTodKwlv_g2XbOCi9DKSAA&usqp=CAU'
              projectName='Netflix-Clone'
              />
              <Card 
              imgsrc='https://icdn3.digitaltrends.com/image/digitaltrends/whatsappweb4-640x640.jpg'
               projectName='WhatsApp_Web-Clone'
              />
              <Card 
              imgsrc='https://raw.githubusercontent.com/Tapendrakmr/library-Managment-System/master/lib1.JPG'
              projectName='Library Managment System'
              />
              <Card 
              imgsrc={nodeImage}
              projectName='Library Managment System'
              />
            </div>  
        </div>
    )
}

export default Project
