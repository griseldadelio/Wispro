import { FC } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { UserType } from "../../../../types";

type Props = {
    data: UserType;
    handleClickDelete: (id: string) => void;
    handleClickUserUpdate: (data: UserType) => void;
};

const Row: FC<Props> = ({ data, handleClickDelete, handleClickUserUpdate }) => {
    const { fullName, newUser, email, id } = data;

    return (
        <tbody>
            <tr>
                <td>{newUser}</td>
                <td>{fullName}</td>
                <td>{email}</td>
                <td className="text-center">
                    <PencilFill onClick={() => handleClickUserUpdate(data)} />
                </td>
                <td className="text-center">
                    <TrashFill onClick={() => handleClickDelete(id)} />
                </td>
            </tr>
        </tbody>
    );
};
export { Row };