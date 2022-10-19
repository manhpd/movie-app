import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
	return (
		<div className='movies-list d-flex justify-content-evenly flex-wrap'>
			{props.movies.map((movie, index) => (
				<MovieCard key={'movie_'+index} movie={movie} />
			))}
		</div>
	);
};

export default MovieList;