import axios from 'axios';

export const register = newUser => {
    return axios
    .post('signup', {
        username: newUser.username,
        password: newUser.password,
        date: newUser.date,
        sex: newUser.sex,
        country: newUser.country,
    })
    .then(res => {
        console.log('Registrado en React!')
    })
}

export const login = user => {
    return axios
    .post('/', {
        username: user.username,
        password: user.password
    })
    .then(res =>{
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err);
    })
}