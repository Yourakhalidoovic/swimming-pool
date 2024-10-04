import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md="4">
            <h5>About Us</h5>
            <p>
              This is a swimming app that helps you track your progress and
              connect with other swimmers.
            </p>
          </Col>
          <Col md="4">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Tracking</a>
              </li>
              <li>
                <a href="#">Affiliation</a>
              </li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Contact Us</h5>
            <p>
              Email: [support@swimmingapp.com](mailto:support@swimmingapp.com)
            </p>
            <p>Phone: 555-555-5555</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
