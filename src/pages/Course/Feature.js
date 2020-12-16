// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

// import images
import insurance from "../../assets/images/icon/insurance.svg";
import graduationHat from "../../assets/images/icon/graduation-hat.svg";
import ai from "../../assets/images/icon/ai.svg";

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { icon : insurance, title : "Unlimited Access", desc : "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.", link : "#" },
                { icon : graduationHat, title : "Our Courses", desc : "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.", link : "#" },
                { icon : ai, title : "Expert Teachers", desc : "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.", link : "#" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            {
                                this.state.features.map((feature, key) =>
                                    <Col md={4} key={key}>
                                        <Card className="course-feature text-center overflow-hidden rounded shadow border-0">
                                            <CardBody className="py-5">
                                                <div className="icon">
                                                    <img src={feature.icon} className="avatar avatar-small" height="55" alt="" />
                                                </div>
                                                <h4 className="mt-3"><Link to={feature.link} className="title text-dark"> {feature.title}</Link></h4>
                                                <p className="text-muted">{feature.desc} </p>
                                                <Link to={feature.link} className="text-primary read-more">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                                <img src={feature.icon} className="full-img" height="300" alt="" />
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;