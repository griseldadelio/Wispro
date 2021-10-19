import { FC, FormEvent, useState, useEffect } from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { Modal, Form, InputGroup } from 'react-bootstrap';
import { user } from '../../services/api/users'

const ModalForm: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const [newUser, setNewUser] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const id = match.params.id;

    const updateUser = () => {
        user.patch(id, { newUser, fullName, email, password })
        history.push('/users/');
    }

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        updateUser();
    }

    useEffect(() => {
        if (id) {
            user.getId(id)
                .then(response => {
                    setFullName(response.lastname);
                    setNewUser(response.newUser);
                    setEmail(response.email);
                    setPassword(response.password)
                })
        }
    }, [id])

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                </Form>
            </Modal.Body>
        </>
    );
}

export { ModalForm }