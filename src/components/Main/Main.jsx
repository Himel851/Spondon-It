import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Main.scss'
import mainImg from '../../images/main image.png'
import img1 from '../../images/animated element.png'
import img2 from '../../images/animated element 2.png'
import bg from '../../images/Vector.png'
import SliderPage from './SliderPage'

const Main = () => {
    
    return (
        <div className="main">
            <Container>
                <Row>
                    <Col sm={6} md={6}>
                        <h1 className='h1'>
                            We have developed incredible tools to make your life easier.
                        </h1>
                        <Button variant="primary" className='btn'><h1>View Products</h1></Button>
                    </Col>
                    <Col sm={6} md={6} className="text-right">
                        <div className='img '>
                            <img src={mainImg} alt="" className='imgMain' />

                            <img src={img1} alt="" className='img1' />
                            <img src={img2} alt="" className='img2' />



                        </div>
                    </Col>
                </Row>
            </Container>

            <SliderPage />

           
            </div>



        
    )
}

export default Main