import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {Form, Button } from 'react-bootstrap'
import React from "react";

function Login2() {

  const [loginstate, setLoginState] = useState({
    action: 'login'
  })

  
    return (
      <Container className='border border-dark shadow-lg py-4 rounded-3 mobile' id='index-banner'>
      <Col as='h1' className="text-orange text-center p-2 mb-3">Bejelentkezés</Col>
          <Form style={{width:'500px'}}>
                    <Form.Group as={Col} sm={{ span: 7 }}>
                        <Form.Label  color="secondary"  htmlFor="formEmail">Email</Form.Label>
                        <Form.Control placeholder="Email-cím" onChange={(e) => {
                                        setLoginState({...loginstate, email: e.target.value })
                                        } }
                                    controlid="formEmail"
                                    type="email"
                                    />
                    </Form.Group>
                    <Form.Group as={Col} sm={{ span: 7 }}>
                        <Form.Label htmlFor="formPassword">Password</Form.Label>
                        <Form.Control placeholder="Jelszó"  onChange={(e) => {
                                        setLoginState({...loginstate, password: e.target.value })
                                        } }
                                    controlid="formPassword"
                                    type="password"
                                    />
                    </Form.Group>
                    <Row>
                    <Col className='mx-auto col=3' >
                <Button variant="warning" type="submit" onClick={(e) => {
          fetch('http://localhost/react-php/insert.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginstate),
            credentials: 'same-origin',
          })
          .then(function (response) {
           
            return response.json();
          
          }).then(function (response) {
           
            alert(response.message)} )
            e.preventDefault()
        } }>Login
                </Button>
                </Col>
                </Row>
            </Form>
             

             </Container> 
       
    )
  }
  
  export default Login2;



