import React from 'react';
import Slider from 'react-slick';
import './TestimonialSliderMobile.css';
import aliPng from '../assets/images/avatar-ali.png';
import anishaPng from '../assets/images/avatar-anisha.png';
import richardPng from '../assets/images/avatar-richard.png';
import shanaiPng from '../assets/images/avatar-shanai.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        name: "Ali Bravo",
        quote: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
        image: aliPng
    },
    {
        name: "Anisha Li",
        quote: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
        image: anishaPng
    },
    {
        name: "Richard Watts",
        quote: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
        image: richardPng
    },
    {
        name: "Shanai Gough",
        quote: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
        image: shanaiPng
    },
];

const TestimonialSliderMobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        appendDots: dots => (
            <div className="custom-dots-container">
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="custom-dot"></div>
        ),
    };

    return (
        <div className="slider-wrapper-mobile">
            <div className="slider-container-mobile">
                <Slider {...settings} className='slider-mobile'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card-mobile">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image-mobile" />
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.quote}</p>
                        </div>
                    ))}
                </Slider>
                <div className="custom-dots-container">
                <ul>
                    {testimonials.map((_, index) => (
                        <li key={index} className="custom-dot"></li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default TestimonialSliderMobile;
