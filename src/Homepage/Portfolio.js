import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Col, Row, Nav, Navbar, NavItem } from 'react-bootstrap'

const Portfolio = () => {
    return (
        <div class="outter">
           <Grid fluid={true} className="topBorder">
                <Row className="navbar">
                    <Col xs={12} sm={4} md={4} lg={2}>
                        <div className="navbar-title">
                            Nick Paridon
                        </div>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} >
                        <div className="navbar-links">
                            <ul>
                                <li><Link className="links" to="/">About Me </Link></li>   
                                <li><Link className="links" to="/Portfolio">Portfolio </Link></li> 
                                <li><Link className="links" to="/Contact">Contact</Link></li>   
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <div className="container">
                <Grid className="lower-grid">
                    <Row>
                        <Col xs={12} lg={6} md={6} sm={6}>
                            <div className="inner-title">Portfolio</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10} xs={10} m={10} sm={10} xsOffset={1} smOffset={1} mdOffset={1} lgOffset={1} >
                            <div className="hr" />
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} lg={6} md={6} sm={12}>
                            <Link to="/Hangman" className="project-link">
                                <img className="portfolio-picture" src={ require('./assets/images/hangman.png') } />
                                <div className="project-overlay">Hangman (React)</div>
                            </Link>
                        </Col>
                        <Col xs={12} lg={6} md={6} sm={12}>
                            <a href="https://hsdeckbuilder.herokuapp.com" className="project-link">
                                <img className="portfolio-picture" src={ require('./assets/images/hearthstone.png') } />
                                <div className="project-overlay">Hearthstone (Ruby on Rails)</div>
                            </a>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} lg={6} md={6} sm={12}>
                            <Link to="/Starwars" className="project-link">
                                <img className="portfolio-picture" src={ require('./assets/images/starwars.png') } />
                                <div className="project-overlay">StarWars (React)</div>
                            </Link>
                        </Col>
                        <Col xs={12} lg={6} md={6} sm={12}>
                            <Link to="/Giphy" className="project-link">
                                <img className="portfolio-picture" src={ require('./assets/images/giphy.png') } />
                                <div className="project-overlay">Giphy (React)</div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} lg={6} md={6} sm={12} >
                            <Link to="/rps" className="project-link">
                                <img className="portfolio-picture" src={ require('./assets/images/rps.png') } />
                                <div className="project-overlay">Rock Paper Scissors (React and Firebase)</div>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <Navbar fixedBottom={true} className="footer">
                <div className="footer-copyright py-3 text-center">
                    © 2018 Copyright:
                </div>
            </Navbar>
        </div>
    );
};

export default Portfolio;       