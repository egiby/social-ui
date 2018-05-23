export function getHeader(token = null) {
    let header = {
        'Content-Type': 'application/json',
    };
    if (token !== null) {
        header.Authorization = 'Bearer ' + token;
    }
    
    return header;
}
