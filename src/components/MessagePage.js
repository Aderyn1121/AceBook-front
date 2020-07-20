import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';


const MessagePage = props => {
    let messages;

    const getMessages
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
    MessagePage
)