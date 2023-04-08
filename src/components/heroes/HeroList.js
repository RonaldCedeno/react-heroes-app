import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <div className='row row-cols-md-4 g-4 animate__animated animate__fadeIn'>
            {
                heroes.map(heroe => (
                    <HeroCard 
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>
    )
}
