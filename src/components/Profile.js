import React from 'react'
import { connect } from 'react-redux';
// import Bio from './Bio'
import NavBar from './NavBar';
import MessagePage from './MessagePage';


const Profile = props => {
     
    
    

    return(
        <main className='profile__main'>
            <NavBar />
            <div className='profile__name-info'>
                <h2 className='profile__name'>{props.session.firstName} {props.session.lastName}</h2>
                <h3 className='profile__gender'>Gender: {props.session.gender}</h3>
                <h3 className='profile__genderPref'>Looking for: {props.session.genderPref} partners</h3>
                <h3 className='profile__spectrum'>Orientation: {props.session.spectrum}</h3>
            </div>
            {/* <MessagePage /> */}
        </main>
    )
}


const mapStateToProps = state => {
    return{
    session: state.session,
    people: state.people
    }
}


export default connect(
    mapStateToProps,
    null
)(
    Profile
)