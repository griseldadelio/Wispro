import { FC, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { ModalForm } from '../../../../components';
import { UserType } from '../../../../types';

type Props = {
    data: UserType
    handleClickDelete: (id: string) => void,
}

const TableUsers: FC<Props> = ({ data, handleClickDelete }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { fullName, newUser, email, id } = data

    return (
        <tbody>
            <tr>
                <td>{newUser}</td>
                <td>{fullName}</td>
                <td>{email}</td>
                <td className="text-center">
                    <Button variant="primary" onClick={handleShow}>
                        <PencilFill />
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        {/* <ModalForm {id} /> */}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </td>
                <td className="text-center">
                    <TrashFill onClick={() => handleClickDelete(id)} />
                </td>
            </tr>
        </tbody>
    )
}
export { TableUsers }