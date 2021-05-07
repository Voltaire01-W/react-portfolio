import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/lambda.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Software Development Team Lead</strong>
                    <br />
                    <strong>Technology:</strong> React JS, Node.js, HTML, CSS3, Python, JavaScript
                    <br />
                    <strong>Duration:</strong> January 2020 - January 2021
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> with cross-functional design teams
                                                software solutions that elevated client side
                                                experience and significantly improved overall
                                                functionality and performance.</li>
                      <li><strong>Developed &amp; Modified</strong> React.js software to correct coding
                                                        errors, upgrade interfaces and improve overall
                                                        performance.
                      </li>
                      <li><strong>Consulted</strong> regularly with internal customers on
                                        application development project status, new project
                                        proposals and software-related technical issues.
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
