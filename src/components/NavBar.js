import React from 'react'
import {connect} from 'react-redux'
import { logout } from '../actions/sessionActions'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

const NavBar = props => {
    const token = props.token

    if(!token){
        if(!props.token){
            return(
                <nav className='nav__bar'>
                    <Link to='/'>Home</Link>
                    <Link to='/people'>People</Link>
                </nav>
            )
        }

    }

    return(
        <nav className='nav__bar'>
            <Link to='/'>Home</Link>
            <Link to='/profile'>My profile</Link>
            <Link to='/people'>People</Link>
            <Button onClick={() => props.logout()}>Sign out</Button>
        </nav>
    )
    
}


const mapStateToProps = state => {
    return {
        token: state.session.token
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);