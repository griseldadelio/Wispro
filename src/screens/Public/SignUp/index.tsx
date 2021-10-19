import { FC, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../../assets/wispro.png';
import { Row, Card, Form, InputGroup, Button, Col, Container } from 'react-bootstrap';
import { user } from '../../../services/api/users'
import '../style.css'

const SignUp: FC = () => {
    const [newUser, setNewUser] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    const createUser = async () => {
        await user.post({ newUser, fullName, email, password });
    }

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        createUser();
        history.push('/signin');
    }


    return (
        <div className='container-log'>
            <Container className='pt-5'>
                <Row className='p-4 justify-content-md-center'>
                    <Col md={4} className='bg-log d-flex' />
                    <Col md={4} className='p-0 '>
                        <Card className="shadow">
                            <div className="card-header pt-4 pb-4 text-center color">
                                <img src={Logo} alt="wispro logo" height="80" />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    <h3 className="text-dark-50 mt-0 font-weight-bold">
                                        Sign Up
                                    </h3>
                                </Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            id="fullName"
                                            placeholder="Ex: Philip Json"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>User</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            id="user"
                                            placeholder="Ex: Philip.J"
                                            value={newUser}
                                            onChange={(e) => setNewUser(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            id="email"
                                            placeholder="Ex:philipJson@gmail.com"
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
                                                className='form-control'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    {/* {
                                            authMsgError != null ? (<div className="alert alert-danger p-2 m-2" role="alert"> {authMsgError} </div>) : (<span></span>)
                                        } */}
                                    <Form.Group className="text-center">
                                        <Button className="btn-color" type="submit">
                                            Sign In
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export { SignUp }