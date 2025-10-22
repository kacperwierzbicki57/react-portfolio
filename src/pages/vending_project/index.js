import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Vending_project = () => {
  return (
    <HelmetProvider>
       <Container className="About-header">
      
        <div className="project1-bg"></div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Hello</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="project1-content">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="12">
              <h1 className="display-4 mb-4">HTML Page</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
           {/* Example section 0 */}
          <Row className="mb-4">
            <Col md="6">
                <img
                src={require("../../assets/images/Start.jpg")}
                alt="Example 1"
                 style={{ width: "500px", height: "500px", objectFit: "scale-down", borderRadius: "8px" }}
              />
            </Col>
         <Col md="6">
            <p></p>
              <h2>Functionality</h2>
              <p></p>
              <p></p>
              <p>The page was written using Html, CSS and Java script languages and is providing the user with informations and comparisions of a few chosen countries as well as a possibility to add more of them.  </p>
            </Col>
          </Row>
          {/* Example section 1 */}
          <Row className="mb-4">
            <Col md="6">
            <p></p>
              <h2>Layout</h2>
              <p></p>
              <p></p>
              <p>Every country contains its own section split into parts for location, characteristics, and interesting facts, plus a photo gallery with slides.  </p>
            </Col>
            <Col md="6">
                 <img
                src={require("../../assets/images/Poland.jpg")}
                alt="Example 1"
                 style={{ width: "500px", height: "500px", objectFit: "scale-down", borderRadius: "8px" }}
              />
            </Col>
            <div style={{ height: "30px" }}></div>
          </Row>
          {/* Example section 2 */}
          <Row className="mb-4">
            <Col md="6">
                <img
                src={require("../../assets/images/Form.jpg")}
                alt="Example 1"
                 style={{ width: "500px", height: "500px", objectFit: "scale-down", borderRadius: "8px" }}
              />
            </Col>
             <Col md="6">
            <p></p>
              <h2>Feedback</h2>
              <p></p>
              <p></p>
              <p> The users are able to fill up a form with their country of choice which after moderation can be added by the moderator to the project as its own <br/> separate page </p>
          

          
            </Col>
          </Row>
          
          {/* Links */}
          <Row className="mb-4">
            <Col md="10">
              <h4> Github Link: &nbsp; &nbsp;
              <a href="https://github.com/kacperwierzbicki57/MiniEncyclopedia">Click here</a>
              </h4>
              <p></p>
              <div style={{ height: "50px" }}>

              </div>

              <Link to={"/portfolio"} className="btn btn-primary">
                Back to Portfolio
              </Link>
             <div style = {{height: "50px"}}></div>
              </Col>
              </Row>
        </div>
      </Container>
    </HelmetProvider>
  );
};