import Cookies from "js-cookie";

export const setCookie = (key, value) => {
    Cookies.set(key, value, { expires: 1})
}

export const getCookie = (key, value) => {
    return Cookies.get(key);
}

export const deleteCookie = key => {
    Cookies.remove(key);
}