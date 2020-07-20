import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import { baseUrl } from '../config';


const MessagePage = props => {
    let messages;

    const getMessages = async () => {
        res = await fetch(`${baseUrl}/api/messages/${props.session.id}`)

        if(res.ok){
            messages = res.json();
            console.log(messages)
        }
    }
    getMessages();

    const sorter = () => {

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