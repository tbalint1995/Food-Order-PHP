import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Nav, NavDropdown, Container, Navbar,  Col, Row, ListGroup, Badge  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Outlet } from 'react-router-dom'
import { FcReddit} from 'react-icons/fc';

export default function MainComponent(props) {
    return (<>
        <Navbar className='text-white p-0' expand="lg">
            <Container fluid className="nav_bg">
                <Container className='w-75 d-flex justify-content-between p-0'>
                    <Col>
                        <LinkContainer className='p-0  text-white f-logo' to="/">
                            <Navbar.Brand >Pizza Hut<FcReddit /></Navbar.Brand>
                        </LinkContainer>
                    </Col>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <LinkContainer className='text-white p-3 f-b' to='/'>
                            <NavDropdown title="Termékek" id="collasible-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Pizzák</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Egzotikus ízek</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Pikáns ízek</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">Minden termék</NavDropdown.Item>
                            </NavDropdown>
                            </LinkContainer>

                            <LinkContainer className='text-white p-3 f-b' to="/login2">
                                <Nav.Link>Bejelentkezés</Nav.Link>
                            </LinkContainer>

                            <LinkContainer className='text-white p-3 f-b' to="/register2">
                                <Nav.Link>Regisztráció</Nav.Link>
                            </LinkContainer>

                            <LinkContainer className='text-white p-3 f-b' to="/remember">
                                <Nav.Link>Elfelejtett jelszó</Nav.Link>
                            </LinkContainer>

                            <LinkContainer className='text-white p-3 f-b' to="/shop">
                                <Nav.Link >
                                
                                    <i className=" bi bi-cart-plus"></i> <Badge bg="secondary" 
                                    className="offset-top-minus">{props.data.shopping_cart_size}</Badge>
                                </Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>


        <Outlet />



        <Container fluid as='footer' className="text-white px-0 footer mt-auto  bg-light">
            <Container fluid className="orange p-4  mb-0 ">

                <Container className='w-75' >
                    <Row>
                        <Col lg={4} xs={12}>
                            <h5 >Company Bio</h5>
                            <p>We are a team of college students working on this project like it's our
                                full time job. Any amount would help support and continue development on this project and is greatly
                                appreciated.</p>
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <h5 className='w-50' >Settings</h5>
                            <ListGroup >
                                <ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/getting-started/rfs/" target='_blank'>
                                    Link 1
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
                                    Link 2
                                </ListGroup.Item>

                                <ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50 ' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
                                    Link 3
                                </ListGroup.Item>

                                <ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
                                    Link 4
                                </ListGroup.Item>
                            </ListGroup>

                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <h5 className='w-50' >Connect</h5>
                            <ListGroup>
                                <ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/getting-started/rfs/" target='_blank'>
                                    Link 1
                                </ListGroup.Item>
                                <ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
                                    Link 2
                                </ListGroup.Item>

                                <ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50 ' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
                                    Link 3
                                </ListGroup.Item>

                                <ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
                                    Link 4
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

            </Container>
            <Container fluid className="footer-copyright" >
                <Container className='w-75' >
                    <Col className="f-text"> Made by <a href="http://materializecss.com">Materialize</a>
                    </Col>
                </Container>
            </Container>

        </Container>
    </>)
}
