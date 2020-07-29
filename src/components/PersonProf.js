import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

const PersonProf = props => {
    let id = Number(props.match.params.personId)
    let person = props.people[id]

    if(!person){
        return null;
    }

    return(
        <main className='profile__main'>
            <NavBar />
            <div className='profile__name-info'>
                <h2 className='profile__name'>{person.firstName} {person.lastName}</h2>
                <h3>Gender: {person.gender}</h3>
                <h3>Looking for: {person.genderPref} partners</h3>
                <h3>Orientation: {person.spectrum}</h3>
            </div>
        </main>
    )
}


const mapStateToProps = state => {
    return{
        people: state.people
    }
}

export default connect(
    mapStateToProps,
    null
)(
    PersonProf
)