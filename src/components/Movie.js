import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from './MovieDetail';

const Movie = () => {
    const [movie, setMovie] = useState([]);
	const { movieId } = useParams();
	
	const getMovieRequest = async () => {
		const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=0f0ca953f6ebd293de6b3243a558b3b1&language=en-US`
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson) {
			setMovie(responseJson);
		}
	}

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<MovieDetail movie={movie}/>
	);
};

export default Movie;