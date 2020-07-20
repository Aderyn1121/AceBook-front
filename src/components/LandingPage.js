import React, { useState } from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/sessionActions'
import Modal from 'react-modal'
import SignUpContainer from './SignUp';
import NavBar from './NavBar';

const LandingPage = props => {
    const [signinemail, setSigninEmail] = useState("");
    const [signinpassword, setSigninPassword] = useState("");


    const updateEmail = (event) => setSigninEmail(event.target.value);
    const updatePassword = (event) => setSigninPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.login(signinemail, signinpassword);
        
    };

    const handleDemoUser = async (event) => {
        event.preventDefault();
        await props.login("demouser@demouser.com", "demouser");
        
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleModal = (event) => {
        setModalIsOpen(true)
    }

    Modal.setAppElement('#root');

    return(
        <main>
            <NavBar />
            <h1 className='acebook__title'>Welcome to AceBook!</h1>
            <div className='acebook__desc'>
                The world's foremost (and likely only) dating site for ace-spectrum people.
            </div>
            <div className='signInForm'>
                    <input type="email" onChange={updateEmail} className="form__input" value={signinemail} placeholder="Email address" />
                    <input type="password" onChange={updatePassword} className="form__input" value={signinpassword} placeholder="Password" />
                    <button className="form__button" onClick={handleSubmit}>Log In</button>
                    <button className="demo__button" onClick={handleDemoUser}>Demo User</button>
                    <div>
                        <p>Don't have an account? Sign up here!</p>
                        <button onClick={handleModal}>Sign Up</button>
                    </div>
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{overlay:{ backgroundColor: 'grey'}, content:{backgroundColor: '#5c2478', color: 'white'}}} >
                        <SignUpContainer />
                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                    </Modal>   
            </div>
        </main>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),

    }
}


export default connect(
    null,
    mapDispatchToProps
)(
    LandingPage
)