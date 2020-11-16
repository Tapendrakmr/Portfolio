import React from 'react'
import "./Service.css"
import Card from 'react-bootstrap/Card'
function Service() {
    return (
        <div className="service">
           <center> <h2 className='heading'>Service Provided</h2></center>
            <div className='cardinfo'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="stack_images" src="https://png.pngitem.com/pimgs/s/527-5276024_node-js-hd-png-download.png" />
                    <Card.Body>
                        {/* Image
                           Title
                           text
                        */}
                        <Card.Title>Card Title 1</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                       
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="stack_images" src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" />
                    <Card.Body>
                        {/* Image
                           Title
                           text
                        */}
                        <Card.Title>Card Title 1</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                       
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',height:'22rem' }}>
                    <Card.Img variant="top" className="stack_images" src="https://hackernoon.com/drafts/ar1wv331n.png" />
                
                    <Card.Body>
                        {/* Image
                           Title
                           text
                        */}
                        <Card.Title>Card Title 1</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                       
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Service
