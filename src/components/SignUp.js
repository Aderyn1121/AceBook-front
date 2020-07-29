import React, {useState} from 'react'
import { connect } from 'react-redux';
import {createUser} from '../actions/sessionActions'
// import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const SignUpContainer = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male');
    const [genderPref, setGenderPref] = useState('male');
    // const [imgUrl, setImgUrl] = useState('');
    const [spectrum, setSpectrum] = useState('ace');
    const [likesPuns, setLikesPuns] = useState(1);
    const [favPet, setFavPet] = useState('dog');
    const [spontaneous, setSpontaneous] = useState(1);
    const [intoTech, setIntoTech] = useState(1);
    const [introvert, setIntrovert] = useState(1);
    
    const NameInput = props => {  
        let tempFirst
        let tempLast
        const firstNameChange = e => {
            tempFirst = (e.target.value)
            // console.log('changing name')
        }

        const lastNameChange = e => {
            tempLast = (e.target.value)
        }

        const handleClick = (e) =>{
            setFirstName(tempFirst)
            setLastName(tempLast)
            setNextComponent("GenderSpectrum")
        }
        
        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>What's your name?</h2>
                <label>First Name: 
                <input onChange={firstNameChange} placeholder='First'></input>
                </label><br />
                <label>Last Name: 
                <input onChange={lastNameChange} placeholder='Last' />
                </label><br />
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }
    const [nextComponent, setNextComponent] = useState("NameInput")
    

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
            setNextComponent("PunInput")
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>A few personal questions...</h2>
                <label>Choose your gender: 
                    <select onChange={genderChange} value={gender}>
                        <option value='male'>Guy</option>
                        <option value='female'>Gal</option>
                        <option value='nonbinary'>Nonbinary Pal</option>
                    </select>
                </label><br />
                <label>Choose your gender preference: 
                    <select onChange={genderPrefChange} value={genderPref}>
                        <option value='male'>Guys</option>
                        <option value='female'>Gals</option>
                        <option value='nonbinary'>Any Pals</option>
                    </select>
                </label><br />
                <label>Where do you fall on the ace spectrum?  
                    <select onChange={spectrumChange} value={spectrum}>
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


    // const ImgInput = props => {
    //     let tempImg;
    //     const imgChange = e => {
    //         tempImg = (e.target.value)
    //     }

    //     const handleClick = (e) =>{
    //         setImgUrl(tempImg)
    //         setNextComponent("PunInput")
    //     }

    //     return(
    //         <div className='signUp__question-div'>
    //             <h2 className='signUp__question-header'>Profile Pic</h2>
    //             <input type='file' onChange={imgChange} placeholder="i.imgur.com/..."></input>
    //             <button></button>
    //             <br />
    //             <button onClick={handleClick}>Continue</button>
    //         </div>
    //     )
    // }

    const PunInput = props => {
        const punChange = e => {
            setLikesPuns(e.target.value)
        }

        const handleClick = (e) =>{
            setNextComponent("PetInput")
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Do you like puns?</h2>
                <select value={likesPuns} onChange={punChange}>
                    <option value={1}>Yes</option>
                    <option value={0}>No, I'm not punny enough.</option>
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
            setNextComponent("SpontanietyCheck")
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>What's your ideal pet?</h2>
                <select value={favPet} onChange={petChange}>
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
            setNextComponent("IntrovertCheck")
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Do you tend towards planning, or spontaneity?</h2>
                <select value={spontaneous} onChange={spontaneousChange}>
                    <option value={1}>Spontaneity</option>
                    <option value={0}>Pre-planning</option>
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
            setNextComponent("IntoTechCheck")
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Are you more extroverted, or introverted?</h2>
                <select value={introvert} onChange={introvertChange}>
                    <option value={1}>Introverted</option>
                    <option value={0}>Extroverted</option>
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
            setNextComponent("EmailPass")
        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Are you into technology?</h2>
                <select value={intoTech} onChange={intoTechChange}>
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                </select>
                
                <button onClick={handleClick}>Continue</button>
            </div>
        )
    }


    const EmailPass = props => {
        let tempEmail;
        let tempPW;
        const emailChange = e => {
            tempEmail = (e.target.value)
        }

        const passChange = e => {
            tempPW = (e.target.value)
        }

        const handleClick = async (e) =>{
            setEmail(tempEmail)
            setPassword(tempPW)
            // if(imgUrl === undefined) setImgUrl(null)
            await props.createUser(firstName, lastName, email, password, gender, genderPref, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert)

        }

        return(
            <div className='signUp__question-div'>
                <h2 className='signUp__question-header'>Input your email and desired password</h2>
                <label>Email: <input type='email' onChange={emailChange}></input></label>
                <label>Password: <input type='password' onChange={passChange}></input></label>
                <button onClick={handleClick}>Sign up!</button>
            </div>
        )
    }


    
    switch(nextComponent){
        case 'NameInput':
            return <NameInput />
        case 'GenderSpectrum':
            return <GenderSpectrum />
        // case 'ImgInput':
        //     return <ImgInput />
        case 'PunInput':
            return <PunInput />
        case 'PetInput':
            return <PetInput />
        case 'SpontanietyCheck':
            return <SpontanietyCheck />
        case 'IntrovertCheck':
            return <IntrovertCheck />
        case "IntoTechCheck":
            return <IntoTechCheck />
        case 'EmailPass':
            return <EmailPass createUser={props.createUser} />
        default:
            return null
        }

    
}


const mapDispatchToProps = dispatch => {
    return {
        createUser: (firstName, lastName, email, password, gender, genderPref, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert) =>{
            return dispatch(createUser(firstName, lastName, email, password, gender, genderPref, spectrum, likesPuns, favPet, spontaneous, intoTech, introvert))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    SignUpContainer
)