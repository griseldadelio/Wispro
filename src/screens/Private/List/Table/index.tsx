import { FC } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { UserType } from '../../../../types';
import { Link } from 'react-router-dom'

type Props = {
    data: UserType
    handleClickDelete: (id: string) => void,
}

const TableUsers: FC<Props> = ({ data, handleClickDelete }) => {
    const { user, email, id } = data
    return (
        <tbody>
            <tr>
                <td>{user}</td>
                <td>{email}</td>
                <td className="text-center">
                    <Link to={`/users/edit/${id}`} className="mx-2">
                        <PencilFill />
                    </Link>
                </td>
                <td className="text-center">
                    <TrashFill onClick={() => handleClickDelete(id)} />
                </td>
            </tr>
        </tbody>
    )
}
export { TableUsers }