import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from "../../Images/sliderImage/slider-large-1.jpg"
import slider2 from "../../Images/sliderImage/slider-large-2.jpg"
import slider3 from "../../Images/sliderImage/slider-large-3.jpg"

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={slider1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={slider2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;