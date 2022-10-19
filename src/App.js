import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import { Navbar } from './components/Navbar';

const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=0f0ca953f6ebd293de6b3243a558b3b1&language=en-US&page=1`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			setMovies(responseJson.results);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
        <Navbar/>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;