import Cookies from 'js-cookie'

let token = null;

const AUTH_TOKEN_KEY = 'auth-token';

export function setToken(new_token) {
    Cookies.set(AUTH_TOKEN_KEY, new_token);
    token = new_token;
}

export function getToken() {
    if (token !== null) {
        return token;
    }
    token = Cookies.get(AUTH_TOKEN_KEY);
    return token;
}
