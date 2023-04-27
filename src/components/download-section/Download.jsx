import React from "react"
import './Download.css'
import appImg from "../../assets/fake-data/images/app.png"
import { Container,Row,Col } from "reactstrap"

function Download() {
    function handleClick(e) {
        e.preventDefault()
    }
    return <section>
<Container className="app__container">
<Row>
 <Col>
 <div className="app__img">
 <img src={appImg} alt="" />
</div>
 </Col>

<Col lg='6' md='6'>
<div className="app__content">
<h5>Download Our App</h5>
 <h2 className="mb-4">Never feel Hungry! Download Our Mobile App! Order Delicious Food</h2>
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni a ut, enim recusandae qui earum amet et odio nobis officiis?</p>
</div>

 <div className="app__btns d-flex align-items-center gap-5 mt-4">
 <button className="btn__apple d-flex align-item-center gap-3">
 <i class="ri-apple-line"></i><a href="#" onClick={handleClick} className="apple">Apple Store</a>
</button>

<button className="btn__google d-flex align-item-center gap-3">
<i class="ri-google-play-line"></i>{" "}
<a href="#" onClick={handleClick} className="google">Google Play</a>
 </button>

</div>
</Col>
</Row>
</Container>
</section>
}
export default Download