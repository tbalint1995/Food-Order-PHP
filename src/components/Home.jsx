import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { PizzaCard } from './PizzaCard';


export default function Home(props) {
    return (<>

        <Container className="my-5 border border-dark shadow-lg py-5 w-75  rounded-3" id="index-banner">
            <Container className="p-0 rounded-3">
                <Col as='h1' className="text-orange text-center p-4">Bemutatkozás</Col>
                <Row className="row ">
                    <Col className="text-white ps-4 pe-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique voluptatum eius facere maxime deleniti
                        nobis tenetur adipisci, magnam mollitia eaque, corporis quo! Molestiae exercitationem aliquam eligendi id
                        similique dolorum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique voluptatum eius facere maxime deleniti
                        nobis tenetur adipisci, magnam mollitia eaque, corporis quo! Molestiae exercitationem aliquam eligendi id
                        similique dolorum!
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <LinkContainer to="/">
                            <MDBBtn className='text-uppercase p-3 fs-6 border border-0 my-4 mb-4 myb' size='Tekintsd át kínálatunkat'>
                                Tekintsd át kínálatunkat
                            </MDBBtn>
                        </LinkContainer>
                    </Col>
                </Row>

                <Row>
                {props.data && props.data.hot_deals.map((pizza, index) => {
                        return (<PizzaCard refreshData={props.refreshData} item={pizza} key={index}/>)
                    })}
                </Row>


            </Container>
        </Container>

        



    </>)
}