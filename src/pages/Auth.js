import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

function Auth(props) {
    const location = useLocation()
    console.log(location);
    const isLogin = location.pathname === LOGIN_ROUTE ? true : false
    return (
        <Container 
           className='d-flex justify-content-center align-items-center'>
           <Card className='mt-4 p-3' style={{width:"500px"}}>
            <h2 className='m-auto mb-3'>{isLogin? 'Авторизация':'Регистрация'}</h2>
                <Card.Body>
                    <Form >
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3">
                            Email
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control placeholder="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                            Password
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                    <Row className='d-flex justify-content-between'>
                       <div className='d-flex justify-content-between'>
                            <p>{isLogin ? 'Нет аккаунта?':'Есть аккаунт?'}</p>
                            <NavLink to={isLogin? REGISTRATION_ROUTE : LOGIN_ROUTE}>{isLogin ? 'Зарегистрируйтесь!' : 'Войдите!'}</NavLink>
                        </div>    
                        <Button variant="outline-success">{isLogin ? 'Войти':'Зарегистрироваться'}</Button>{' '}
                    </Row>
                </Card.Body>
            </Card>
                
           </Container>
    );
}

export default Auth;