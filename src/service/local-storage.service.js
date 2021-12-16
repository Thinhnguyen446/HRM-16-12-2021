import { USER_LOCAL } from "../constants";

export const setLocalUser = (data) => {
    localStorage.setItem(USER_LOCAL, JSON.stringify(data));
};

export const getLocalUser = () => {
    if (localStorage.getItem(USER_LOCAL)) return localStorage.getItem(USER_LOCAL);
};

export const removeLocalUser = () => {
    localStorage.removeItem(USER_LOCAL);
}