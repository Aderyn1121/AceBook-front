import { SET_TOKEN, REMOVE_TOKEN } from "../actions/sessionActions.js";
import { act } from "react-dom/test-utils";

const initialState = {
    id: null,
    token: null,
    firstName: null,
    lastName: null,
    gender: null,
    genderPref: null,
    imgUrl: null,
    spectrum: null,
    likesPuns: null,
    favPet: null,
    spontaneous: null,
    intoTech: null,
    introvert: null,
    likedUsers: null
}

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case SET_TOKEN:
            return Object.assign(nextState, 
                {
                id: action.payload.user,
                token: action.payload.token,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName ,
                gender: action.payload.gender,
                genderPref: action.payload.genderPref,
                imgUrl: action.payload.imgUrl,
                spectrum: action.payload.spectrum,
                likesPuns: action.payload.likesPuns,
                favPet: action.payload.favPet,
                spontaneous: action.payload.spontaneous,
                intoTech: action.payload.intoTech,
                introvert: action.payload.introvert,
                likedUsers: action.payload.likedUsers
            })
        case REMOVE_TOKEN:
            return initialState;
        default:
            return state;
    }
}

export default sessionReducer;
