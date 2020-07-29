import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';


const People = props => {

    const [filterOpt, setFilterOpt] = useState('none')
    const [filtered, setFiltered] = useState(props.people)
    
    
    const searchByFilter = () => {
        if (filterOpt === 'none'){
            setFiltered(props.people)
        }
        if (filterOpt === 'female'){
            setFiltered(props.people.filter(person => person.genderPref === 'female'))
        }
        if (filterOpt === 'male'){
            setFiltered(props.people.filter(person => person.genderPref === 'male'))
        }
        if (filterOpt === 'all') {
            setFiltered(props.people.filter(person => person.genderPref === 'all'))
        }
    }
    
    useEffect(() => {
        searchByFilter()
    }, [filterOpt, props.people])

    const handleChoice = (e) => {
        setFilterOpt(e.target.value)
    }


    

    if(props.people.length === 0) return null

    return (
        <main className='people__main'>
            <NavBar />
            <h1>People</h1>
            <div className='filter__list'>
                <label>Filter looking for: 
                    <select onChange={handleChoice}>
                        <option value='none'>No filter</option>
                        <option value='female'>Women</option>
                        <option value='male'>Men</option>
                        <option value='all'>All</option>
                    </select></label>
            </div>
            <div className='people__list-container'>
                {filtered.map((person, i) => {
                    return(
                        <div key={i} className='people__list-person'>
                            <Link to={`/person/${person.id}`} className='people__list-personName'>
                                {person.firstName} {person.lastName}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}


const mapStateToProps = state => {
    return{
    session: state.session,
    people: Object.values(state.people)
    }
}

export default connect(
    mapStateToProps,
    null
)(
    People
)

