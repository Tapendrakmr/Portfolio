import React from 'react'
import "./Service.css"

import CardService from "./CardService/CardService"
function Service() {
    return (
        <div className="service">
           <center> <h2 className='heading'>Service Provided</h2></center>
            <div className="project_info">
                <CardService imgsrc="https://5.imimg.com/data5/EU/LN/DV/GLADMIN-56292461/selection-191-500x500.png" title="Backend"/>
                <CardService imgsrc="https://cdn.august.com.au/wp-content/uploads/2015/04/Allan_Get-Web-Developer-Savvy_header.png" title="Frontend"/>
                <CardService imgsrc="https://prod-001.s3.amazonaws.com/media/articleImages/Cartoon_Programmer_Writes_Code_Workspace_Concept._Vector.jpg" title="FullStack"/>
            </div>
        </div>
    )
}

export default Service
