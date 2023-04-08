
import './Newsletter.css'
import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import maleTourist from "../assets/images/male-tourist.png"
const Newsletter = () => {
    return (
       <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful traveling information</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='enter your email'/>
                            <button className=' newsletter__bnt'>Subscribe</button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Non numquam unde culpa id quasi ut 
                             voluptates tenetur aperiam repellendus, incidunt ipsa commodi expedita, 
                             quam minima quod quo. Nesciunt, nihil. Natus!
                        </p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
       
    );
}

export default Newsletter;
