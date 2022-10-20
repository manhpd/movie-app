import React, { useState, useEffect } from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';
import MovieList from './MovieList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const showLoading = () => (
        setLoading(true)
    )

    const hideLoading = () => (
        setLoading(false)
    )
	const getMovieRequest = async () => {
        showLoading();
		const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=0f0ca953f6ebd293de6b3243a558b3b1&language=en-US&page=1`;
		const response = await fetch(url)
            .then(response => {
                hideLoading();
                const data = response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                return data;
                
            })
            .catch((error) => {
                if (error) {
                    setError(error);
                }
            });
		if (response) {
			setMovies(response.results);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

    const handleRefresh = () => {
        getMovieRequest();
    }

	return (
        <PullToRefresh onRefresh={getMovieRequest}>
		    <MovieList loading={loading} movies={movies} error={error}/>
        </PullToRefresh>
	);
};

export default Movies;