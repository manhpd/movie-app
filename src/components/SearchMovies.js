import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PullToRefresh from 'react-simple-pull-to-refresh';
import MovieList from './MovieList';

const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [view, setView] = useState('grid');
    const { searchValue } = useParams();

    const showLoading = () => (
        setLoading(true)
    )

    const hideLoading = () => (
        setLoading(false)
    )
    const getMovieRequest = async () => {
        showLoading();
        const url = `https://api.themoviedb.org/3/search/movie/?api_key=0f0ca953f6ebd293de6b3243a558b3b1&query=${searchValue}&page=1` ;

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

    const setListView = () => {
        setView('list');
    }

    const setGridView = () => {
        setView('grid');
    }

    return (
        <>
            <div className='p-5'>
                <div id="btnContainer">
                    <button className={view === 'list' ? 'btn active' : 'btn'} onClick={setListView}><i className="fa fa-bars"></i>list</button> 
                    <button className={view === 'grid' ? 'btn active' : 'btn'} onClick={setGridView}><i className="fa fa-th-large"></i>grid</button>
                </div>
            </div>

            <PullToRefresh onRefresh={getMovieRequest}>
                <MovieList loading={loading} movies={movies} error={error} view={view}/>
            </PullToRefresh>
        </>
    );
};

export default SearchMovies;