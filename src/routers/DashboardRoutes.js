import React from 'react'
import { NavBar } from '../components/ui/NavBar'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {

    const params = useParams();
    localStorage.setItem('lastPath', `/${params['*']}`);
    
    return (
        <>
            <NavBar />
            <div className='container mt-3'>
                <Routes>
                    <Route exact path='/heroe/:heroeId' element={<HeroScreen />}/>
                    <Route exact path='/marvel' element={<MarvelScreen />}/>
                    <Route exact path='/dc' element={<DcScreen />}/>
                    <Route exact path='/search' element={<SearchScreen />}/>
                    <Route path='*' element={<Navigate to='/marvel'/>}/>
                </Routes>
            </div>
        </>
    )
}
