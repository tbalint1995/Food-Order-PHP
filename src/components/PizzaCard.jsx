import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Col, Row, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import { CurrencyFormatter } from './Untils'
import { useState } from 'react';
import Config from './Config';
import {addToCart} from "./Utils";


const  { session_id,imagesPath }  = Config;

const PizzaCard = (props) => {

    const [state, setState] = useState({ db: 1, ar: props.item.default_price });
  

    console.log(props);
    return (
        <>
            <Col ms={12} md={6} lg={3} className='my-5'>
                <Card className='inline-block text-white text-center' >

                    {/* DataBase pizza image */}
                    <Card.Img variant="top" src={imagesPath + props.item.image} />
                    <Card.Body >

                        {/* DataBase pizza name*/}
                        <LinkContainer to='/'>
                            <Card.Title as='h5'> {props.item.name}</Card.Title>
                        </LinkContainer>

                        <Row className='d-flex align-items-center m-0'>
                            <Col className='p-1  align-middle' >
                                {/* DataBase pizza price */}
                                <Card.Text className='mb-0 my-3'>{CurrencyFormatter.format(props.item.default_price)}</Card.Text>
                            </Col>
                            <Col className='p-0 m-3 w-100' xs={6} md={10} lg={10}  >

                                {/*State change pirce */}
                                <MDBInput  id='formWhite' type='number' contrast onChange={(e) => {
                                   
                                   const finalqtty = Math.abs(e.target.value);
                                    
                                   setState({
                                        db: finalqtty,
                                        ar: finalqtty * props.item.default_price
                                    })
                                }} min='1' max='15' value={state.db} />
                            </Col>
                        </Row>
                        
                        <Col className='p-0 d-flex  justify-content-center w-100'  >
                            <Button onClick={() => state.db > 0 && addToCart({id: props.item.id, qtty: state.db, 
                            session_id: session_id}).then(res=>{
                                    console.log(res);
                                    props.refreshData()
                                    
                                })}  size='sm' className='mybshop '>
                                <i className=" fs-3 bi bi-cart-plus"></i> {state.ar ? CurrencyFormatter.format(state.ar) : ''}
                            </Button>
                        </Col>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
};


export { PizzaCard }