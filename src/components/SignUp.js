import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {createUser} from '../actions/sessionActions'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const SignUpContainer = async (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [genderPref, setGenderPref] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [spectrum, setSpectrum] = useState('');
    const [likesPuns, setLikesPuns] = useState(true);
    const [favPet, setFavPet] = useState('dog');
    const [spontaneous, setSpontaneous] = useState(true);
    const [intoTech, setIntoTech] = useState(true);
    const [introvert, setIntrovert] = useState(true);
    
    const NameInput = props => {  
        const firstNameChange = e => {
            setFirstName(e.target.value)
        }

        const lastNameChange = e => {
            setLastName(e.target.value)
        }

        const handleClick = (e) =>{
            setNextComponent(<GenderSpectrum />)
        }
        
        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>What's your name?</h2>
                <label>First Name: 
                <input onChange={firstNameChange} value={firstName} placeholder='First'></input>
                </label><br />
                <label>Last Name: 
                <input onChange={lastNameChange} value={lastName} placeholder='Last' />
                </label><br />
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }
    const [nextComponent, setNextComponent] = useState(<NameInput />)
    

    const GenderSpectrum = props => {
        const genderChange = e => {
            setGender(e.target.value)
        }

        const genderPrefChange = e => {
            setGenderPref(e.target.value)
        }

        const spectrumChange = e => {
            setSpectrum(e.target.value)
        }

        const handleClick = (e) =>{
            setNextComponent(<ImgInput />)
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>A few personal questions...</h2>
                <label>Choose your gender: 
                    <select onChange={genderChange}>
                        <option value='male'>Guy</option>
                        <option value='female'>Gal</option>
                        <option value='nonbinary'>Nonbinary Pal</option>
                    </select>
                </label><br />
                <label>Choose your gender preference: 
                    <select onChange={genderPrefChange}>
                        <option value='male'>Guys</option>
                        <option value='female'>Gals</option>
                        <option value='nonbinary'>Any Pals</option>
                    </select>
                </label><br />
                <label>Where do you fall on the ace spectrum?  
                    <select onChange={spectrumChange}>
                        <option value='ace'>Asexual</option>
                        <option value='demi'>Demi</option>
                        <option value='grayAce'>Gray-Ace</option>
                        <option value='other'>Other</option>
                    </select>
                </label><br />
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }


    const ImgInput = props => {
        const imgChange = e => {
            setImgUrl(e.target.value)
        }

        const handleClick = (e) =>{
            setNextComponent(<PunInput />)
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Profile Pic</h2>
                <input onChange={imgChange} placeholder="i.imgur.com/..."></input>
                <br />
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }

    const PunInput = props => {
        const punChange = e => {
            setLikesPuns(e.target.value)
        }

        const handleClick = (e) =>{
            setNextComponent(<PetInput />)
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Do you like puns?</h2>
                <select onChange={punChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No, I'm not punny enough.</option>
                </select>
                
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }

    const PetInput = props => {
        const petChange = e => {
            setFavPet(e.target.value)
        }

        const handleClick = (e) =>{
            setNextComponent(<SpontanietyCheck />)
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>What's your ideal pet?</h2>
                <select onChange={petChange}>
                    <option value='dog'>Dogs</option>
                    <option value='cat'>Cats</option>
                    <option value='lizard'>Lizards</option>
                    <option value='spider'>Spiders</option>
                    <option value='fish'>Fish</option>
                </select>
                
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }

    const SpontanietyCheck = props => {
        const spontaneousChange = e => {
            setSpontaneous(e.target.value)
        }

        const handleClick = (e) =>{
            setNextComponent(<IntrovertCheck />)
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Do you tend towards planning, or spontaneity?</h2>
                <select onChange={spontaneousChange}>
                    <option value={true}>Spontaneity</option>
                    <option value={false}>Pre-planning</option>
                </select>
                
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }

    const IntrovertCheck = props => {
        const introvertChange = e => {
            setIntrovert(e.target.value)
        }

        const handleClick = (e) =>{
            setNextComponent(<IntoTechCheck />)
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Are you more extroverted, or introverted?</h2>
                <select onChange={introvertChange}>
                    <option value={true}>Introverted</option>
                    <option value={false}>Extroverted</option>
                </select>
                
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }

    const IntoTechCheck = props => {
        const intoTechChange = e => {
            setIntoTech(e.target.value)
        }

        const handleClick = (e) =>{
            setNextComponent(<EmailPass />)
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Are you more extroverted, or introverted?</h2>
                <select onChange={intoTechChange}>
                    <option value={true}>Introverted</option>
                    <option value={false}>Extroverted</option>
                </select>
                
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }


    const EmailPass = props => {
        const emailChange = e => {
            setEmail(e.target.value)
        }

        const passChange = e => {
            setPassword(e.target.value)
        }

        const handleClick = async (e) =>{
            if(firstName && lastName && email && password){
            await props.createUser(firstName, lastName, email, password, gender, genderPref, imgUrl, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert)
            }
            else toast('Please fill out all fields!')
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Are you more extroverted, or introverted?</h2>
                <label>Email: <input type='email' onChange={emailChange}></input></label>
                <label>Password: <input type='password' onChange={passChange}></input></label>
                <button onClick={handleClick}>Sign up!</button>
            </div>
        )
    }


    return(
        <>
        {nextComponent}
        <ToastContainer />
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        createUser: (firstName, lastName, email, password, gender, genderPref, imgUrl, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert) =>{
            return dispatch(createUser(firstName, lastName, email, password, gender, genderPref, imgUrl, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    SignUpContainer
)