import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Payment.scss'
import bg from '../../images/payment/Rectangle 800.png'
import bg1 from '../../images/payment/Rectangle 801.png'
import bg2 from '../../images/payment/Rectangle 799.png'
import center from '../../images/payment/Rectangle 796.png'
import paypal from '../../images/payment/Group 247.png'
import instamojo from '../../images/payment/Group 245.png'
import bank from '../../images/payment/Group 252.png'
import stripe from '../../images/payment/Group 250.png'
import sign from '../../images/payment/Group 244.png'
import cash from '../../images/payment/Group 251.png'
import paytm from '../../images/payment/Group 249.png'
import pay from '../../images/payment/Group 246.png'
import flutter from '../../images/payment/Group 248.png'
import logo1 from '../../images/payment/Rectangle 802.png'
import logo2 from '../../images/payment/Visa.png'
import logo3 from '../../images/payment/Mastercard.png'
import logo4 from '../../images/payment/Discover.png'
import logo5 from '../../images/payment/Amex.png'
import logo6 from '../../images/payment/JCB.png'

const Payment = () => {
    return (
        <div className='payment'>
            <Container>
                <Row>
                    <Col sm={7}>
                        <div className='img'>
                            <img src={bg} alt="" className='mainBg' />
                            <img src={bg1} alt="" className='bg1' />
                            <img src={bg2} alt="" className='bg2' />
                            <img src={center} alt="" className='center' />
                            <img src={paypal} alt="" className='paypal' />
                            <img src={instamojo} alt="" className='instamojo' />
                            <img src={bank} alt="" className='bank' />
                            <img src={stripe} alt="" className='stripe' />
                            <img src={sign} alt="" className='sign' />
                            <img src={cash} alt="" className='cash' />
                            <img src={paytm} alt="" className='paytm' />
                            <img src={pay} alt="" className='pay' />
                            <img src={flutter} alt="" className='flutter' />
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div>
                            <div className='right d-flex flex-row '>
                                <img src={logo1} alt="" className='logo' />
                                <img src={logo2} alt="" className='logo' />
                                <img src={logo3} alt="" className='logo' />
                                <img src={logo4} alt="" className='logo' />
                                <img src={logo5} alt="" className='logo' />
                                <img src={logo6} alt="" className='logo' />
                            </div>
                            <h3>* Almost every card supports entire the world</h3>
                            <div className='support'>
                                <h2>
                                    30+ International Payment Gateways Support
                                </h2>
                                <span >
                                    Manage your eCommerce self managed or multi vendor with huge features like amazon, daraz, rich vendor or merchant feature, central product management system with lots of cool features included.
                                </span> <br />
                                <Button variant="primary" className='btn mt-4'><h1>More Detaills</h1></Button>

                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Payment