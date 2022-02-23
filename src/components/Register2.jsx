import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row} from 'react-bootstrap'
import { useState } from 'react';
import { Col} from 'react-bootstrap';
import {Button, Card, Form} from "react-bootstrap";

function Register2() {

  const [state, setState] = useState({
    action: 'registration'
  })

  
  return (
    <Container className='border border-dark shadow-lg py-4 rounded-3 mobile' id='index-banner' >
            <Col as='h1' className="text-orange text-center p-2 mb-3">Regisztráció</Col>
                <Form style={{width:'500px'}}>
                
            <Form.Group controlId="firstname" as={Col} sm={{ span: 8 }}>
            <Form.Label >Firstname</Form.Label>
            <Form.Control placeholder="firstname" onChange={(e) => {
              setState({...state, firstname: e.target.value })
            } }/>
            </Form.Group>
            <br />
            <br />
            <Form.Group controlId="lastname" as={Col} sm={{ span: 8 }}>
            <Form.Label>Lastname</Form.Label>
            <Form.Control  placeholder="lastname" onChange={(e) => {
              setState({...state, lastname: e.target.value })
            } }/>
            </Form.Group>
            <br />
            <br />
            <Form.Group controlId="formBasicEmail" as={Col} sm={{ span: 8 }}>
            <Form.Label>Email address</Form.Label>
            <Form.Control placeholder="Email-cím" onChange={(e) => {
              setState({...state, email: e.target.value })
            } }/>
            </Form.Group>
            <br />
            <br />
            <Form.Group controlId="formBasicPassword" as={Col} sm={{ span: 8 }}>
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Jelszó"  onChange={(e) => {
              setState({...state, password: e.target.value })
            } }/>
            </Form.Group>
            <br />
            <br />
            <Button variant="primary"  type="submit" dangerouslySetInnerHTML={{ __html: 'Küldés' }} onClick={(e) => {
              fetch('http://localhost/react-php/insert.php', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(state),
                credentials: 'same-origin',
              })
              .then(function (response) {
               
                return response.json();
              
              }).then(function (response) {
               
                alert(response.message)
                
                
              } ) 
              e.preventDefault()
            } 
             }
             ></Button>
           
            </Form>

          </Container> 
    )

          }

export default Register2;
