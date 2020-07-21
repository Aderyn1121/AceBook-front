import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


const Matches = props => {
    
    const people = Object.values(props.people) 
    
    let matches = people.map((person, i) => {
        let count = 0;
        
        
        if (String(person.intoTech) === props.session.intoTech){ 
            count += 1;
        }
        if (String(person.favPet) === props.session.favPet) {
            count += 1;
        }
        if (String(person.likesPuns) === props.session.likesPuns) {
            count += 1;
        }
        if (String(person.introvert) === props.session.introvert) {
            count += 1;
        }
        if (String(person.spontaneous) === props.session.spontaneous) {
            count += 1;
        }
    
        console.log(count);

        if(props.session.genderPref === 'all'){
            if(count/5 >= 0.6) return person
        }
        if(props.session.genderPref === 'male'){
            if(person.gender === 'male' && count/5 >= 0.6) return person
        }
        if (props.session.genderPref === 'female') {
            if (person.gender === 'female' && count / 5 >= 0.6) return person
        }
    })
    console.log(matches)
    if (matches.length === 0) return null;

    return(
        <main>
            <NavBar />
            <h1>Over 60% matches</h1>
            <br />
            <div className='people__list-container'>
                {matches.map((match, i) => {
                    return(
                        <div key={i} className='people__list-person'>
                            <Link to={`/person/${match.id}`} className='people__list-personName'>
                                {match.firstName} {match.lastName}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}


const mapStateToProps = state => {
    return {
        session: state.session,
        people: state.people
    }
}


export default connect(
    mapStateToProps,
    null
)(
    Matches
)