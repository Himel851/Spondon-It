import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Testimonial.scss'
import dot from '../../images/Testimonial/dot.png'
import rectangle from '../../images/Testimonial/Rectangle.png'
import img1 from '../../images/Testimonial/Rectangle 757.png'
import img2 from '../../images/Testimonial/Rectangle 758.png'
import img3 from '../../images/Testimonial/Rectangle 756.png'
import img4 from '../../images/Testimonial/Rectangle 759.png'
import img5 from '../../images/Testimonial/Rectangle 760.png'
import {AiFillStar} from 'react-icons/ai'

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div>
                            <div className='position'>
                                <img src={rectangle} alt="" className='rectangle' />
                                <h1> <span>3650+</span> <br /> Happy <br /> Clients </h1>
                                <img src={dot} alt="" className='dot' />
                            </div>

                        </div>
                    </Col>

                    <Col sm={2}>   
                    </Col>
                    <Col sm={6}>
                        <div className='right p-5'>
                            <AiFillStar className='icon' />
                            <AiFillStar className='icon' />
                            <AiFillStar className='icon' />
                            <AiFillStar className='icon' />
                            <AiFillStar className='icon' /> <br /> <br />
                            <span className='mt-5'>"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business. <br /><br /> We're loving it. This is simply unbelievable! I like it more and more each day because it makes my life a lot easier."
                            </span>
                            <div className='d-flex profile'>
                                <img src={img1} alt="" />
                                <div className='logo'>
                                    <h6>Nazmul Himel</h6>
                                    <span>CTO at Guestbook</span>
                                </div>
                            </div>
                        </div>   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonial