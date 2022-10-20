import React from 'react';
import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';
import MovieCard from './MovieCard';

const MovieList = (props) => {

    return (
        <>
            { 
                !props.error ? (
                    !props.loading ? (
                            <div className='movies-list d-flex justify-content-evenly flex-wrap'>
                                {props.movies?.map((movie, index) => (
                                    <MovieCard key={'movie_' + index} movie={movie} />
                                ))}
                            </div>
                    ) : (
                        <LoadingScreen />
                    )   ) : (
                        <ErrorScreen />
                    )
                
            }
     </>
    );
};

export default MovieList;