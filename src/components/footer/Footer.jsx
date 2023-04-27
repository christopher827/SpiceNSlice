import React from "react"
import "./Footer.css"
import { Container,Row,Col,ListGroup,ListGroupItem } from "reactstrap"

const footerQuickLinks=[
    {
        display:'Terms & Conditions',
        url:'#'
    },
    {
        display:'Privacy Policy',
        url:'#'
    },
    {
        display:'Return & Refund',
        url:'#'
    },
    {
        display:'Payment Method',
        url:'#'
    },


]
const footerLinks=[
    {
        display:'About Us',
        url:'#'
    },
    {
        display:'Menu',
        url:'#'
    },
    {
        display:'Recipes',
        url:'#'
    },
    {
        display:'Contact',
        url:'#'
    },


]

function Footer() {
    function handleClick(e) {
        e.preventDefault()
    }
    return <footer className="footer">
<div className="footer__top">
<Container>
    <Row>
        <Col lg='4' md='4' sm='6'>
        <div className="logo">
 <h2 className="d-flex align-items-center gap-1 mb-4">
<span><i class="ri-restaurant-2-line"></i></span>Slice N Spice
</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil labore ipsa, maiores sint earum odio!</p>
</div>
</Col>
 <Col lg='2' md='4' sm='6'>
<h5 className="footer__link-title">
Quick Links
</h5>
 <ListGroup>
{
footerQuickLinks.map((item,index)=><ListGroupItem className="link__item" key={index} onClick={handleClick}>
<a href={item.url}>{item.display}</a>
</ListGroupItem>)
 }
 </ListGroup>
</Col>
<Col lg='3' md='4' sm='6'>
<h5 className="footer__link-title">
Info Links
</h5>
<ListGroup className="footer-decor">
{
footerLinks.map((item,index)=><ListGroupItem className="link__item" key={index} onClick={handleClick}>
<a href={item.url}>{item.display}</a>
</ListGroupItem>)
 }
            </ListGroup>
        </Col>

<Col lg='3' md='4' sm='6'>
<h5 className="footer__link-title">Contact</h5>

<ListGroup>
<ListGroupItem className="link__item d-flex align-items-center gap-3"><i class="ri-map-pin-line"></i>Lagos,Nigeria{""}</ListGroupItem>
<ListGroupItem className="link__item d-flex align-items-center gap-3"><i class="ri-mail-line"></i>Christopheroche827@gmail.com{""}</ListGroupItem>
<ListGroupItem className="link__item d-flex align-items-center gap-3"><i class="ri-phone-line"></i>+234 9033 631 446</ListGroupItem>   
</ListGroup>
</Col>
</Row>
</Container>
</div>

<div className="footer__bottom">
<Container>
<Row>
<Col lg='12'>
<p>copyright 2022, developed by Chris. All rights reserved </p>
</Col>
</Row>
</Container>
</div>
</footer>
}
export default Footer