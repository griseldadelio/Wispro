import { FC } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { UserType } from '../../../../types';

type Props = {
    data: UserType
    handleClickDelete: (id: string) => void;
    handleClickEdit: (id: string) => void,
}

const Row: FC<Props> = ({ data, handleClickDelete, handleClickEdit }) => {
    const { fullName, newUser, email, id } = data

    return (
        <tbody>
            <tr>
                <td>{newUser}</td>
                <td>{fullName}</td>
                <td>{email}</td>
                <td className="text-center">
                    <PencilFill onClick={() => handleClickEdit(id)} />
                </td>
                <td className="text-center">
                    <TrashFill onClick={() => handleClickDelete(id)} />
                </td>
            </tr>
        </tbody>
    )
}
export { Row }