import { baseUrl } from "../config";

export const TOKEN_KEY = "aceapp/authentication/token";
export const SET_TOKEN = "aceapp/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "aceapp/authentication/REMOVE_TOKEN";

const removeToken = () => ({ type: REMOVE_TOKEN });
const setToken = (payload) => {
    return { type: SET_TOKEN, payload };
};

export const loadToken = () => (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    const user = window.localStorage.getItem("aceapp/authentication/USER_ID");
    const firstName = window.localStorage.getItem("aceapp/authentication/firstName");
    const lastName = window.localStorage.getItem("aceapp/authentication/lastName");
    const gender = window.localStorage.getItem("aceapp/authentication/gender");
    const genderPref = window.localStorage.getItem("aceapp/authentication/genderPref");
    const bio = window.localStorage.getItem("aceapp/authentication/bio");
    // // const imgUrl = window.localStorage.getItem("aceapp/authentication/imgUrl");
    const spectrum = window.localStorage.getItem("aceapp/authentication/spectrum");
    const likesPuns = window.localStorage.getItem("aceapp/authentication/likesPuns");
    const favPet = window.localStorage.getItem("aceapp/authentication/favPet");
    const spontaneous = window.localStorage.getItem("aceapp/authentication/spontaneous");
    const intoTech = window.localStorage.getItem("aceapp/authentication/intoTech");
    const introvert = window.localStorage.getItem("aceapp/authentication/introvert");
    const likedUsers = window.localStorage.getItem("aceapp/authentication/likedUsers");
    if (token) {
        dispatch(setToken({ token, user, firstName, lastName, gender, genderPref, bio, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert, likedUsers }));
    }
};

export const createUser = (firstName, lastName, email, password, gender, genderPref, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert) => async dispatch => {
    const response = await fetch(`${baseUrl}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, gender, genderPref, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert}),
    });

    if (response.ok) {
        const payload = await response.json();
        window.localStorage.setItem(TOKEN_KEY, payload.access_token);
        window.localStorage.setItem("aceapp/authentication/USER_ID", payload.user.id);
        window.localStorage.setItem("aceapp/authentication/firstName", payload.user.firstName);
        window.localStorage.setItem("aceapp/authentication/lastName", payload.user.lastName);
        window.localStorage.setItem("aceapp/authentication/gender", payload.user.gender);
        window.localStorage.setItem("aceapp/authentication/genderPref", payload.user.genderPref);
        window.localStorage.setItem("aceapp/authentication/bio", payload.user.bio);
        // // window.localStorage.setItem("aceapp/authentication/imgUrl", payload.user.imgUrl);
        window.localStorage.setItem("aceapp/authentication/spectrum", payload.user.spectrum);
        window.localStorage.setItem("aceapp/authentication/likesPuns", payload.user.likesPuns);
        window.localStorage.setItem("aceapp/authentication/favPet", payload.user.favPet);
        window.localStorage.setItem("aceapp/authentication/spontaneous", payload.user.spontaneous);
        window.localStorage.setItem("aceapp/authentication/intoTech", payload.user.intoTech);
        window.localStorage.setItem("aceapp/authentication/introvert", payload.user.introvert);
        window.localStorage.setItem("aceapp/authentication/likedUsers", payload.user.likedUsers);
        
        dispatch(setToken(payload));
        window.href = '/profile'
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
        window.localStorage.setItem("aceapp/authentication/USER_ID", payload.user.id);
        window.localStorage.setItem("aceapp/authentication/firstName", payload.user.firstName);
        window.localStorage.setItem("aceapp/authentication/lastName", payload.user.lastName);
        window.localStorage.setItem("aceapp/authentication/gender", payload.user.gender);
        window.localStorage.setItem("aceapp/authentication/genderPref", payload.user.genderPref);
        window.localStorage.setItem("aceapp/authentication/bio", payload.user.bio)
        // // window.localStorage.setItem("aceapp/authentication/imgUrl", payload.user.imgUrl);
        window.localStorage.setItem("aceapp/authentication/spectrum", payload.user.spectrum);
        window.localStorage.setItem("aceapp/authentication/likesPuns", payload.user.likesPuns);
        window.localStorage.setItem("aceapp/authentication/favPet", payload.user.favPet);
        window.localStorage.setItem("aceapp/authentication/spontaneous", payload.user.spontaneous);
        window.localStorage.setItem("aceapp/authentication/intoTech", payload.user.intoTech);
        window.localStorage.setItem("aceapp/authentication/introvert", payload.user.introvert);
        window.localStorage.setItem("aceapp/authentication/likedUsers", payload.user.likedUsers);
        dispatch(setToken({ token: payload.access_token, user: payload.user.id, firstName: payload.user.firstName, lastName: payload.user.lastName, gender: payload.user.gender, genderPref: payload.user.genderPref, bio: payload.user.bio,
        spectrum: payload.user.spectrum, likesPuns: payload.user.likesPuns, favPet: payload.user.favPet, spontaneous: payload.user.spontaneous, intoTech: payload.user.intoTech, introvert: payload.user.introvert, likedUsers: payload.user.likedUsers }));
    }
    window.href = '/profile'
};

export const logout = () => (dispatch) => {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem("aceapp/authentication/USER_ID");
    window.localStorage.removeItem("aceapp/authentication/firstName");
    window.localStorage.removeItem("aceapp/authentication/lastName");
    window.localStorage.removeItem("aceapp/authentication/gender");
    window.localStorage.removeItem("aceapp/authentication/genderPref");
    window.localStorage.removeItem("aceapp/authentication/bio");
    // window.localStorage.removeItem("aceapp/authentication/imgUrl");
    window.localStorage.removeItem("aceapp/authentication/spectrum");
    window.localStorage.removeItem("aceapp/authentication/likesPuns");
    window.localStorage.removeItem("aceapp/authentication/favPet");
    window.localStorage.removeItem("aceapp/authentication/spontaneous");
    window.localStorage.removeItem("aceapp/authentication/intoTech");
    window.localStorage.removeItem("aceapp/authentication/introvert");
    window.localStorage.removeItem("aceapp/authentication/likedUsers");
    dispatch(removeToken());
    window.location.href = "/";
};
