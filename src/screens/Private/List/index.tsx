import { FC, useState, useEffect } from 'react';
import { NavBar, Footer } from '../../../components'
import { TableUsers } from './Table';
import { Table, Container } from 'react-bootstrap';
import { UserType } from '../../../types';
import { user } from '../../../services/api/users'

const List: FC = () => {
    const [users, setUsers] = useState<UserType[]>();

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
                        <TableUsers key={user.id} data={user} handleClickDelete={deleteUser} />
                    ))}
                </Table>
            </Container>
            <Footer />
        </>
    );
};

export { List };