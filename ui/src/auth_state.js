import Cookies from 'js-cookie'

const AUTH_TOKEN_KEY = 'auth-token';

export function setToken(new_token, expires = 1 / 24) {
    Cookies.set(AUTH_TOKEN_KEY, new_token, {expires: expires});
}

export function getToken() {
    return Cookies.get(AUTH_TOKEN_KEY);
}

export function authenticated() {
    return getToken() !== null;
}
