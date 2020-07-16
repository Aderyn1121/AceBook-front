import { LOAD_PEOPLE } from "../actions/peopleActions";

const peopleReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case LOAD_PEOPLE:
            let newState = {};
            action.list.people.forEach(person => newState[person.id] = person);
            return Object.assign(nextState, newState);
        default:
            return state;
    }
};

export default peopleReducer;
