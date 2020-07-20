import React from 'react'
import { connect } from 'react-redux';
// import Bio from './Bio'
import NavBar from './NavBar';


const Profile = props => {
     
    
    

    return(
        <main className='profile__main'>
            <NavBar />
            <div className='profile__name-info'>
                <h2>{props.session.firstName} {props.session.lastName}</h2>
                <h3>{props.session.gender}</h3>
                <h3>Looking for: {props.session.genderPref} partners</h3>
                <h3>{props.session.spectrum}</h3>
            </div>
            {/* <div className='profile__bio'>
                <Bio session={props.session} ß/>
            </div> */}
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