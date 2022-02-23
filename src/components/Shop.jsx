import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBInput } from 'mdb-react-ui-kit';
import { Col, Row, Container, Card,  Button, Alert } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { addToCart, deleteFromCart } from "./Utils";
import Config from "./Config";
import { CurrencyFormatter } from './Untils';
import { useState } from 'react';


const { imagesPath, session_id } = Config;

export default function Shop(props) {


    const { shopping_cart, product_list } = props.data
    const products_array = []

    for (const key in shopping_cart) {
        products_array.push([key, shopping_cart[key]])
    }

    let total = 0;

    function AlertDismissibleExample() {
        const [show, setShow] = useState(false);
     
        if (show) {
            return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading className="text-center" as="h3">Figyelem</Alert.Heading>
                    <p className='text-center'>
                        Itt utoljára még modosithatja a megrendelt pizzak számát majd folytassa a véglegsítésel
                    </p>
                </Alert>
            );
        }
        return <Button className="d-none" onClick={() => setShow(false)}>Show Alert</Button>;
    }



    return (<>
        <Container >
            <Row className="px-0  d-flex justify-content-center">
                <h2 className='text-white my-4 text-center bg-dark p-2 bg-opacity-75 px-0'>Az ön álltal vásárolt termékek</h2>

                <AlertDismissibleExample />
                

                {products_array.length > 0 && products_array.map((item, index) => {


                    const prodIndex = product_list.findIndex(
                        (result) => item[0] === result.id
                    )

                    const product = product_list[prodIndex]
                    total += (item[1] * product.default_price);

              

                    return <Col ms={12} md={6} lg={3} className='m-3 ' key={index} >
                        <Card className='text-white text-center p-3' >
                            <Card.Img variant="top" className='cart_img' src={imagesPath + product.image} />
                            <Card.Body >

                                <LinkContainer to='#'>
                                    <Card.Title as='h5'> {product.name}</Card.Title>
                                </LinkContainer>

                                <Row className='d-flex align-items-center m-0'>
                                    <Col className='p-1  align-middle' >
                                        {/* DataBase pizza price */}
                                        <Card.Text className='mb-0 my-3'>{CurrencyFormatter.format(product.default_price)}</Card.Text>
                                    </Col>

                                    <Col className='p-0 w-100' xs={6} md={10} lg={10}  >
                                        <MDBInput    id='formWhite' contrast type="number" min='1' max='15'   onChange={(e) => {
                                 
                                            e.target.disabled = true;
                                           addToCart({ id: item[0], qtty: Math.abs(e.target.value),  session_id: session_id }).then(() => {
                                                props.refreshData()
                                                e.target.disabled = false
                                                
                                            }) 
                                        }} />
                                    </Col>
                                </Row>

                                <div>
                                    {CurrencyFormatter.format(item[1] * product.default_price)}
                                </div>
                                <div>
                                    <Button variant="danger" className="cart_button" onClick={() => {
                                        deleteFromCart({ id: item[0], session_id: session_id }).then(() => {
                                            props.refreshData()

                                        })
                                    }}>[x]</Button>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                })}
                <Container id="cart_down_shop" className="px-0 d-flex d-flex justify-content-end bg-dark  p-3 text-white">
                    <h4 className='me-4 my-1 mydown'>Összesen:  {CurrencyFormatter.format(total)}</h4>
                    <Button className='me-4' variant="light">véglegsítés</Button>
                </Container>
            </Row>
        </Container>
    </>)
}