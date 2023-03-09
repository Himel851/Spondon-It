import React from 'react'
import './Testimonial.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from '../../images/slider/cat 1.png'
import pic2 from '../../images/slider/cat 2.png'
import pic3 from '../../images/slider/cat 3.png'
import pic4 from '../../images/slider/cat 4.png'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <Button className="next">
                <AiOutlineArrowRight className='icon' />
            </Button>
        </div>
    );
};
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <Button className="prev">
                <AiOutlineArrowLeft className='icon' />
            </Button>
        </div>
    );
};


const TestimonialSLider = () => {
    var settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='mt-5 '>
            <div className='slider'>
                <h2> Responsive </h2>
                <Slider {...settings}>
                    <div>
                        <img src={pic1} alt="" />
                    </div>
                    <div>
                        <img src={pic2} alt="" />
                    </div>
                    <div>
                        <img src={pic3} alt="" />
                    </div>
                    <div>
                        <img src={pic4} alt="" />
                    </div>
                    <div>
                        <img src={pic1} alt="" />
                    </div>
                    <div>
                        <img src={pic2} alt="" />
                    </div>
                    <div>
                        <img src={pic3} alt="" />
                    </div>
                    <div>
                        <img src={pic4} alt="" />
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default TestimonialSLider