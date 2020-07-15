import React, { useState } from 'react';
// import {connect} from 'react-redux';

const LandingPage = () => {
    const [signInEmail, setSignInEmail ] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    return(
        <main>
            <h1 className='acebook__title'>Welcome to AceBook!</h1>
            <div className='acebook__desc'>
                The world's foremost (and likely only) dating site for ace-spectrum people.
            </div>
            <div className='signInForm'>
                Placeholder
            </div>
        </main>
    )
}


export default LandingPage