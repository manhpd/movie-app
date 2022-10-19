import React from 'react';

const MovieDetail = (props) => {
	const { movie } = props;
	console.log(props);
	return (
		<div style={{ backgroundSize: `cover`, backgroundImage: `url("https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}")` }}>
			<div className='movie-container p-5 d-flex justify-content-center align-items-center' >
				<img src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + movie.poster_path} alt='movie'></img>
				<div className='d-flex flex-column justify-content-start align-items-start'>
					<h1 className='px-3 py-2 text-light '>
						<strong>{movie.original_title}</strong>
					</h1>
					<span className='px-3 pb-2 text-light'>
						{movie.release_date}
					</span>
					<h2 className='px-3 pb-2 text-light'>
						Overview
					</h2>
					<span className='px-3 pb-2 text-light'>
						{movie.overview}
					</span>
				</div>

			</div>
		</div>

	);
};

export default MovieDetail;