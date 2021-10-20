import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { Modal, Form, InputGroup, Button } from "react-bootstrap";
import { UserType } from "../../types";

interface Props {
    show: boolean;
    onModalClose: Dispatch<SetStateAction<boolean>>;
    selectedUser: UserType;
    handleSubmit: (e: FormEvent<HTMLElement>, user: UserType) => void;
}

const ModalUserUpdate: FC<Props> = ({ show, selectedUser, onModalClose, handleSubmit }) => {
    const [newUser, setNewUser] = useState(selectedUser?.newUser || "");
    const [fullName, setFullName] = useState(selectedUser?.fullName || "");
    const [email, setEmail] = useState(selectedUser?.email || "");
    const [password, setPassword] = useState(selectedUser?.password || "");

    return (
        <>
            <Modal show={show} onHide={() => onModalClose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={(e) =>
                            handleSubmit(e, {
                                id: selectedUser.id,
                                newUser,
                                fullName,
                                email,
                                password,
                            })
                        }
                    >
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="fullName"
                                name="fullName"
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => onModalClose(false)}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export { ModalUserUpdate };
