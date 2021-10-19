import { FC, useState } from 'react';
import { Modal, Form, InputGroup, Button } from 'react-bootstrap';

const ModalForm: FC = () => {
    const [newUser, setNewUser] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    );
}

export { ModalForm }