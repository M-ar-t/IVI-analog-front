import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import SubscripBunner from '../components/SubscripBunner/SubscripBunner';
import FilmCards from '../components/BestWeek/BestWeek';
import NewMovies from '../components/NewMovies/NewMovies';

function Catalog(props) {
    return (
        <div className='pb-5'>           
            <Carousel/>
            <SubscripBunner/>
            <FilmCards/>
            <NewMovies/>
        </div>
    );
}

export default Catalog;