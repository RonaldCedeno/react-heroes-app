import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { heroImages } from '../../helpers/heroImages';

export const HeroScreen = () => {

    // Navigate
    const navigate = useNavigate();

    // Params from URL Ex. dc-flash
    const {heroeId} = useParams();
    
    // Gets that one hero
    const heroe = useMemo(() => getHeroById(heroeId), [heroeId]);

    // No hero found -> Return to main page
    if (!heroe){
        return <Navigate to='/'/>
    }

    // Action for Return button
    const handleReturn = () => {
        heroeId.includes('marvel')
        ? navigate('/marvel', {replace: true})
        : navigate('/dc', {replace: true})
    }

    // Desestructuration from that ONE hero got by id
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={heroImages(`./${heroeId}.jpg`)}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                    alt={superhero}
                />
            </div>

            <div className='col-8 animate__animated animate__fadeInRight'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item'><b>First appearance: </b>{first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
