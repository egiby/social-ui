import {getHeader} from './util'

export const API_URL = 'https://social-webapi.azurewebsites.net';

const SIGNIN_URL = '/api/identity/signin';
export function signin(email, password) {
    return fetch(API_URL + SIGNIN_URL, {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
}

const SIGNUP_URL = '/api/identity/signup';
export function signup(email, password, name, birthday) {
    return fetch(API_URL + SIGNUP_URL, {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            birthday: birthday
        })
    });
}

const ME_URL = '/api/users/me';
export function getPersonalInfo(token) {
    return fetch(API_URL + ME_URL, {
        method: 'GET',
        headers: getHeader(token),
    });
}

export function setPersonalInfo(token, name, birthday, info) {
    return fetch(API_URL + ME_URL, {
        method: 'PUT',
        headers: getHeader(token),
        body: JSON.stringify({
            name: name,
            birthday: birthday,
            info: info
        })
    });
}
