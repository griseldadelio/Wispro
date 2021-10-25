import { FC, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../../assets/wispro.png';
import { Row, Card, Form, InputGroup, Button, Col, Container } from 'react-bootstrap';
import { useAuth } from '../../../hooks';
import '../style.css'


const SignIn: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, authMsgError } = useAuth();
    const history = useHistory();

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, password)
            .then(() => {
                setEmail('')
                setPassword('')
            })
        history.push('/home');
    };

    return (
        <div className='container-log'>
            <Container className='pt-5'>
                <Row className='p-4 justify-content-md-center'>
                    <Col md={4} className='bg-log d-flex' />
                    <Col md='auto' className='p-0 '>
                        <Card className="shadow">
                            <div className="card-header pt-4 pb-4 text-center color">
                                <img src={Logo} alt="wispro logo" height="80" />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    <h3 className="text-dark-50 mt-0 font-weight-bold">
                                        Sign In
                                    </h3>
                                    <Card.Text className="text-muted mb-4 h6">
                                        Enter your email and password to access.
                                    </Card.Text>
                                </Card.Title>
                                <Form onSubmit={handleOnSubmit}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup className=" input-group-merge">
                                            <Form.Control
                                                type="password"
                                                id="password"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    {
                                        authMsgError != null ? (<div className="alert alert-danger p-2 m-2" role="alert"> {authMsgError} </div>) : (<span></span>)
                                    }
                                    <Form.Group className="text-center">
                                        <Button className="btn-color" type="submit">
                                            Sign In
                                        </Button>
                                    </Form.Group>
                                    <div className="text-center mt-3">
                                        <p className="text-muted">Don't have an account?
                                            <Link to="/signup" className="text-muted ml-1"><b>Sign Up</b></Link>
                                        </p>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >

    )
}
export { SignIn }