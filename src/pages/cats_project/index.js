import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { Link } from "react-router-dom";
import Tree from "../../assets/images/tree.jpg";

export const Cats_project = () => {
  return (
    <HelmetProvider>
      <Container
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,     
            backgroundImage: `url(${Tree})`,           
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            pointerEvents: "none",
          }}
        ></div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} |  </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="12">
              <h1 className="display-4 mb-4">Cats</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          {/* Example section 1 */}
          <Row className="mb-4">
            <Col md="10">
              
              <p>A part of the page devoted to pictures of the cats. Thanks to Cataas Api eveyrone can enjoy seeing these creatures.</p>
            </Col>
          
              
          </Row>
          {/* Randomized cat photos section */}
          <Row className="mb-4">
            <Col md="12">
              <h2>Cats</h2>
              <div style={{ display: "flex", gap: "24px" }}>
                <img
                  src={`https://cataas.com/cat?width=300&height=300&${Math.random()}`}
                  alt="Random Cat 1"
                  style={{ margin: "5px", borderRadius: "16px", width: "300px", height: "300px", objectFit: "cover" }}
                />
                <img
                  src={`https://cataas.com/cat?width=301&height=300&${Math.random()}`}
                  alt="Random Cat 2"
                  style={{ margin: "5px", borderRadius: "16px", width: "300px", height: "300px", objectFit: "cover" }}
                />
                <img
                  src={`https://cataas.com/cat?width=302&height=300&${Math.random()}`}
                  alt="Random Cat 3"
                  style={{margin: "5px", borderRadius: "16px", width: "300px", height: "300px", objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                <img
                  src={`https://cataas.com/cat?width=300&height=300&${Math.random()}`}
                  alt="Random Cat 1"
                  style={{margin: "5px", borderRadius: "16px", width: "300px", height: "300px", objectFit: "cover" }}
                />
                <img
                  src={`https://cataas.com/cat?width=301&height=300&${Math.random()}`}
                  alt="Random Cat 2"
                  style={{margin: "5px", borderRadius: "16px", width: "300px", height: "300px", objectFit: "cover" }}
                />
                <img
                  src={`https://cataas.com/cat?width=302&height=300&${Math.random()}`}
                  alt="Random Cat 3"
                  style={{margin: "5px", borderRadius: "16px", width: "300px", height: "300px", objectFit: "cover" }}
                />
              </div>

            

            </Col>
          </Row>


        <Link to={"/portfolio"} className="btn btn-primary">
                        Back to Portfolio
                      </Link>
        
        <Link to={"/project2"} className="btn btn-primary" style={{ marginLeft: "16px" }}>
                        Refresh Images
                      </Link>
        </div>


        
      </Container>
    </HelmetProvider>
  );
};