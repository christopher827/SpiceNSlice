import React from "react"
import { Container,Row,Col } from "reactstrap"
import './Testimonials.css'
import testimonialImg from "../../assets/fake-data/images/review1.png"
import Slider from "react-slick/lib/slider"

function Testimonials() {
    const settings={
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000

    }

    return <section>
<Container>
<Row > 
<Col lg='8' sm='12' md='12' className="m-auto">
    <div className="slider__wrapper d-flex align-items-center gap-5">
        <div className="slider__content w-50">
        <h2 className="mb-4">What our Customers are saying</h2>
    <Slider {...settings}>
    <div>
        <div className="single__testimonial">
            <p className="review__content">             
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dolores excepturi quos quisquam sint voluptatibus ullam expedita enim dolorum. Quis neque ducimus praesentium dolorum ea ipsam soluta aspernatur quas provident?
            </p>

            <h6>John Doe</h6>
            <p>Web Developer</p>
        </div>
    </div>
    <div>
<div className="single__testimonial">
            <p className="review__content">             
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dolores excepturi quos quisquam sint voluptatibus ullam expedita enim dolorum. Quis neque ducimus praesentium dolorum ea ipsam soluta aspernatur quas provident?
            </p>

            <h6>John Doe</h6>
            <p>Web Developer</p>
        </div>
    </div>
    <div>
        <div className="single__testimonial">
            <p className="review__content">             
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dolores excepturi quos quisquam sint voluptatibus ullam expedita enim dolorum. Quis neque ducimus praesentium dolorum ea ipsam soluta aspernatur quas provident?
            </p>

            <h6>John Doe</h6>
            <p>Web Developer</p>
        </div>
    </div>
</Slider>
        </div>
        <div className="slider__img w-50">
        <img src={testimonialImg} className="w-100"/>

        </div>
    </div>
</Col>
</Row>
</Container>
    </section>
}
export default Testimonials