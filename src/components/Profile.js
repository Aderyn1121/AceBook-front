import React from 'react'
import { connect } from 'react-redux';


const Profile = props => {

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