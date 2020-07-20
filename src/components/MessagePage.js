import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import { baseUrl } from '../config';


const MessagePage = props => {
    let messages;

    const getMessages = async () => {
        const res = await fetch(`${baseUrl}/api/messages/${props.session.id}`)

        if(res.ok){
            messages = await res.json();
            messages = messages.messages
            console.log(messages)
        }
    }
    getMessages();

    const sorter = () => {
        let tracker = new Set()

    }
    
    return null;


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