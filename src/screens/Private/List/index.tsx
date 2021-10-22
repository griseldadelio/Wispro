import { FC, useState, useEffect, FormEvent } from "react";
import { NavBar, Footer, ModalUserUpdate } from "../../../components";
import { Row } from "./Table";
import { Table, Container } from "react-bootstrap";
import { UserType } from "../../../types";
import { user } from "../../../services/api/users";

const List: FC = () => {
    const [users, setUsers] = useState<UserType[]>();
    const [selectedUser, setSelectedUser] = useState<UserType>();
    const [modalUserUpdateIsOpen, setModalUserUpdateIsOpen] = useState(false);

    const getUser = () => {
        user.get().then((response) => {
            setUsers(response);
        });
    };
    useEffect(() => {
        getUser();
    }, []);

    const deleteUser = (id: string) => {
        user.deleteUser(id).then(() => getUser());
    };

    const handleClickUserUpdate = (user: UserType) => {
        setSelectedUser(user);
        setModalUserUpdateIsOpen(true);
    };

    const updateUserHandleSubmit = (e: FormEvent<HTMLElement>, u: UserType) => {
        e.preventDefault();
        user.patch(u.id, u).then(() => getUser());
        setModalUserUpdateIsOpen(false);
    };

    return (
        <>
            <NavBar />
            <Container className="mt-5">
                <Table responsive="md" className="striped bordered hover p-5">
                    <thead className="bg-light">
                        <tr>
                            <th>User</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th className="text-center">Edit</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    {users &&
                        users.map((user: UserType) => (
                            <Row
                                key={user.id}
                                data={user}
                                handleClickDelete={deleteUser}
                                handleClickUserUpdate={handleClickUserUpdate}
                            />
                        ))}
                </Table>
                {selectedUser && (
                    <ModalUserUpdate
                        show={modalUserUpdateIsOpen}
                        onModalClose={setModalUserUpdateIsOpen}
                        selectedUser={selectedUser}
                        handleSubmit={updateUserHandleSubmit}
                    />
                )}
            </Container>
            <Footer />
        </>
    );
};

export { List };
