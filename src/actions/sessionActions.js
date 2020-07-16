import { baseUrl } from "../config";

export const TOKEN_KEY = "flash/authentication/token";
export const SET_TOKEN = "flash/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "flash/authentication/REMOVE_TOKEN";

const removeToken = () => ({ type: REMOVE_TOKEN });
const setToken = (payload) => {
    return { type: SET_TOKEN, payload };
};

export const loadToken = () => (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    const user = window.localStorage.getItem("flash/authentication/USER_ID");
    const firstName = window.localStorage.getItem("flash/authentication/firstName");
    const lastName = window.localStorage.getItem("flash/authentication/lastName");
    const gender = window.localStorage.getItem("flash/authentication/gender");
    const genderPref = window.localStorage.getItem("flash/authentication/genderPref");
    const imgUrl = window.localStorage.getItem("flash/authentication/imgUrl");
    const spectrum = window.localStorage.getItem("flash/authentication/spectrum");
    const likesPuns = window.localStorage.getItem("flash/authentication/likesPuns");
    const favPet = window.localStorage.getItem("flash/authentication/favPet");
    const spontaneous = window.localStorage.getItem("flash/authentication/spontaneous");
    const intoTech = window.localStorage.getItem("flash/authentication/intoTech");
    const introvert = window.localStorage.getItem("flash/authentication/introvert");
    const likedUsers = window.localStorage.getItem("flash/authentication/likedUsers");
    if (token) {
        dispatch(setToken({ token, user, firstName, lastName, gender, genderPref, imgUrl, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert, likedUsers }));
    }
};

export const createUser = (firstName, lastName, email, password, gender, genderPref, imgUrl, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert) => async dispatch => {
    const response = await fetch(`${baseUrl}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (response.ok) {
        const payload = await response.json();
        window.localStorage.setItem(TOKEN_KEY, payload.access_token);
        window.localStorage.setItem("flash/authentication/USER_ID", payload.user.id);
        window.localStorage.setItem("flash/authentication/firstName", payload.user.firstName);
        window.localStorage.setItem("flash/authentication/lastName", payload.user.lastName);
        window.localStorage.setItem("flash/authentication/gender", payload.user.gender);
        window.localStorage.setItem("flash/authentication/genderPref", payload.user.genderPref);
        window.localStorage.setItem("flash/authentication/imgUrl", payload.user.imgUrl);
        window.localStorage.setItem("flash/authentication/spectrum", payload.user.spectrum);
        window.localStorage.setItem("flash/authentication/likesPuns", payload.user.likesPuns);
        window.localStorage.setItem("flash/authentication/favPet", payload.user.favPet);
        window.localStorage.setItem("flash/authentication/spontaneous", payload.user.spontaneous);
        window.localStorage.setItem("flash/authentication/intoTech", payload.user.intoTech);
        window.localStorage.setItem("flash/authentication/introvert", payload.user.introvert);
        window.localStorage.setItem("flash/authentication/likedUsers", payload.user.likedUsers);
        
        dispatch(setToken(payload));
    }
};

export const login = (email, password) => async dispatch => {
    const response = await fetch(`${baseUrl}/api/users/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const payload = await response.json();
        window.localStorage.setItem(TOKEN_KEY, payload.access_token);
        window.localStorage.setItem("flash/authentication/USER_ID", payload.user.id);
        window.localStorage.setItem("flash/authentication/firstName", payload.user.firstName);
        window.localStorage.setItem("flash/authentication/lastName", payload.user.lastName);
        window.localStorage.setItem("flash/authentication/gender", payload.user.gender);
        window.localStorage.setItem("flash/authentication/genderPref", payload.user.genderPref);
        window.localStorage.setItem("flash/authentication/imgUrl", payload.user.imgUrl);
        window.localStorage.setItem("flash/authentication/spectrum", payload.user.spectrum);
        window.localStorage.setItem("flash/authentication/likesPuns", payload.user.likesPuns);
        window.localStorage.setItem("flash/authentication/favPet", payload.user.favPet);
        window.localStorage.setItem("flash/authentication/spontaneous", payload.user.spontaneous);
        window.localStorage.setItem("flash/authentication/intoTech", payload.user.intoTech);
        window.localStorage.setItem("flash/authentication/introvert", payload.user.introvert);
        window.localStorage.setItem("flash/authentication/likedUsers", payload.user.likedUsers);
        dispatch(setToken({ token: payload.access_token, user: payload.user.id, firstName: payload.user.firstName, lastName: payload.user.lastName }));
    }
};

export const logout = () => (dispatch) => {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem("flash/authentication/USER_ID");
    window.localStorage.removeItem("flash/authentication/firstName");
    window.localStorage.removeItem("flash/authentication/lastName");
    window.localStorage.removeItem("flash/authentication/gender");
    window.localStorage.removeItem("flash/authentication/genderPref");
    window.localStorage.removeItem("flash/authentication/imgUrl");
    window.localStorage.removeItem("flash/authentication/spectrum");
    window.localStorage.removeItem("flash/authentication/likesPuns");
    window.localStorage.removeItem("flash/authentication/favPet");
    window.localStorage.removeItem("flash/authentication/spontaneous");
    window.localStorage.removeItem("flash/authentication/intoTech");
    window.localStorage.removeItem("flash/authentication/introvert");
    window.localStorage.removeItem("flash/authentication/likedUsers");
    dispatch(removeToken());
    window.location.href = "/";
};
