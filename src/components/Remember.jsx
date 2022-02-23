import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Col, Row, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default function Remember() {





    return (<> 

        <Container className='border border-dark shadow-lg py-4 rounded-3 mobile' id='index-banner' >
        <Col as='h1' className="text-orange text-center p-2 mb-3">Elfelejtett jelszó</Col>
            <Col className='d-flex justify-content-center'>
                <Form>
                    <Row>
                        <Col className='my-2'  xs={12}>
                        <MDBInput label='E-mail Címe' id='typeEmail' type='email' contrast required  />
                        </Col>
             

                       
                        <LinkContainer to='/login'>
                            <Col className='my-3 text-white' xs={12} >Belépés</Col>
                        </LinkContainer>
                    </Row>

                    <Col className='text-center ' lg={12} >
                        <MDBBtn outline color='warning' type='submit' className='text-white'>Küldés</MDBBtn>
                    </Col>

                </Form>
            </Col>
        </Container>


    </>)
}