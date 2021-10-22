import { api } from './api';
import { objectToArray } from '../helper/objectToArray';

type AddUserPayLoad = { newUser: string, fullName: string, email: string, password: string }
type AddUser = { newUser: string, fullName: string, email: string, password: string, date: number }

const post = async (user: AddUser) => {
    await api({
        method: 'post',
        url: '/users.json',
        data: user
    });
}

const getId = async (id: string) => {
    const data = await api({
        method: 'get',
        url: '/users/' + id + '.json'
    });
    return data.data;
}

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/users.json'
    });
    return objectToArray(data.data);
}

type UpdateUserPayLoad = AddUserPayLoad

const patch = async (id: string, user: UpdateUserPayLoad) => {
    await api({
        method: 'PATCH',
        url: '/users/' + id + '.json',
        data: user
    })
}

const deleteUser = async (id: string) => {
    await api({
        method: 'DELETE',
        url: '/users/' + id + '.json'
    })
}

export const user = { post, get, patch, getId, deleteUser };