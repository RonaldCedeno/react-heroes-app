import React, { useMemo } from 'react';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {

    // Obtaining query from URL
    const location = useLocation(); //URL con Query
    const {q = ''} = queryString.parse(location.search)
    
    // Getting chances from Form
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    
    // Search is the initialvalue to the form
    const {searchText} = formValues;
    
    // Obtaining array of hero(es) by name from query
    const heroesFiltered = useMemo(() => getHeroByName(q), [q])
    
    const navigate = useNavigate();
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`, {replace: true});
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type='text'
                            placeholder='Find your hero'
                            className='form-control'
                            name='searchText'
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete='off'
                        />
                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            Search
                        </button>
                    </form>
                </div>
                
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                    (q ==='')
                        && 
                        <div className='alert alert-info'>
                            Search a hero
                        </div>
                    }

                    {
                    (q !=='' && heroesFiltered.length === 0)
                        && 
                        <div className='alert alert-danger'>
                            There is no a hero with {q}
                        </div>
                    }

                    {
                        heroesFiltered.map(heroe => (
                            <HeroCard 
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
