import React, { useState } from 'react'
// import { connect } from "react-redux";
// import {loadToken} from '../actions/sessionActions'
import { baseUrl } from '../config';

const Bio = props => {

    const [bio, setBio] = useState('');

    const handleBio = e => {
        setBio(e.target.value)
    }

    const handleSubmit = async (e) =>{
        const res = await fetch(`${baseUrl}/api/${props.session.id}/bio`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({bio})
        })
    }

    if (props.session.bio) {
        return (
            <div className='profile__bio' >
                {props.session.bio}
            </div >
        )
    }
    else {
        return (
            <div className='profile__bio'>
                <p>Add a bio! You may need to log back in to update.</p>
                <textarea onChange={handleBio} value={bio}></textarea>
                <button onChange={handleSubmit}>Submit Bio</button>
            </div>
        )
    }
}



export default Bio
