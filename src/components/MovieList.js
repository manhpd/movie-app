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
                            <div className={props.view === 'grid' ? 'movie-grid' : 'movie-list'}>
                                {props.movies?.map((movie, index) => (
                                    <MovieCard key={'movie_' + index} movie={movie} view={props.view}/>
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