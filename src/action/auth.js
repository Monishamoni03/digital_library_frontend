import { setCookie, getCookie } from  '../shared/utils/Cookies'
import { setLocalStorage, getLocalStorage } from  '../shared/utils/Storage'

export const setAuthentication = (token, user) => {
    setCookie('token', token);
    setLocalStorage('user', user);
};

export const isAuth = () => {
    if(getCookie('token') && getLocalStorage('user')) {
        return getLocalStorage('user'); 
    } else {
        return false;
    }
}