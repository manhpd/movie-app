import React from 'react';

const MovieList = (props) => {
	return (
		<div className='movies-list d-flex justify-content-evenly flex-wrap'>
			{props.movies.map((movie, index) => (
				<div key={'movie_'+index} className='w-25 image-container d-flex flex-column justify-content-start m-3 border rounded'>
					<img  src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+ movie.poster_path} alt='movie'></img>
                    <span className='px-3 py-2'><strong>{movie.original_title}</strong></span>
                    <span className='px-3 pb-2'>{movie.release_date}</span>
				</div>
			))}
		</div>
	);
};

export default MovieList;