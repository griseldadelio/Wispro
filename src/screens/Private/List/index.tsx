import { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar, Footer, ModalForm } from '../../../components'
import { Row } from './Table';
import { Table, Container } from 'react-bootstrap';
import { UserType } from '../../../types';
import { user } from '../../../services/api/users'

const List: FC = () => {
    // const [newUser, setNewUser] = useState('')
    // const [fullName, setFullName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')


    const [users, setUsers] = useState<UserType[]>();
    const [selectUser, setSelectUser] = useState('')
    const history = useHistory();

    const getUser = () => {
        user.get().then(response => {
            setUsers(response);
        })
    }
    useEffect(() => {
        getUser()
    }, []);

    const deleteUser = (id: string) => {
        user.deleteUser(id)
            .then(() => getUser())
    }

    // const editUser = () => {
    //     user.patch(id, { newUser, fullName, email, password })
    //     history.push('/users/');
    // }

    // useEffect(() => {
    //     if (id) {
    //         user.getId(id)
    //             .then(response => {
    //                 setNewUser(response.newUser);
    //                 setFullName(response.fullName);
    //                 setEmail(response.email);
    //                 setPassword(response.password)
    //             })
    //     }
    // }, [])

    return (
        <>
            <NavBar />
            <Container className='mt-5'>
                <Table responsive='md' className='striped bordered hover p-5'>
                    <thead className='bg-light'>
                        <tr>
                            <th>User</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th className="text-center">Edit</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    {users && users.map((user: UserType) => (
                        <Row key={user.id} data={user} handleClickDelete={deleteUser} handleClickEdit={setSelectUser} />
                    ))}
                </Table>
                <ModalForm />
            </Container>
            <Footer />
        </>
    );
};

export { List };