import { baseUrl } from '../config';

export const LOAD_PEOPLE = "AceBook/userData/LOAD_PEOPLE";

const loadPeople = list => ({ type: LOAD_PEOPLE, list });

export const fetchPeople = () => async (dispatch) => {

    const response = await fetch(`${baseUrl}/api/people`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadPeople(list));
    }
}
