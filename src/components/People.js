import React from 'react';
import NavBar from './NavBar'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';


const People = props => {

    return (
        <main className='people__main'>
            <NavBar />
            <h1>People</h1>
            <br />
            <div className='people__list-container'>
                {props.people.map((person, i) => {
                    return(
                        <div key={i} className='people__list-person'>
                            <Link to={`/person/${person.id}`} className='people__list-personName'>
                                {person.firstName} {person.lastName}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}


const mapStateToProps = state => {
    return{
    session: state.session,
    people: Object.values(state.people)
    }
}

export default connect(
    mapStateToProps,
    null
)(
    People
)

