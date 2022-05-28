import axiosConnection from './config';

const createUser = async (username, password, auth) => {
    return await axiosConnection.post('/user', { username: username, password: password, auth: auth }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });
}

const getUsers = async () => {
    return await axiosConnection.get('/user').then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });
}

const Users = {getUsers, createUser};

export default Users;