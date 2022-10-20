import React, { useState, useEffect } from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';
import MovieList from './MovieList';
import SearchBox from './SearchBox';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('now_playing');
    const [searchValue, setSearchValue] = useState('');
    const [view, setView] = useState('grid');

    const showLoading = () => (
        setLoading(true)
    )

    const hideLoading = () => (
        setLoading(false)
    )
    const getMovieRequest = async () => {
        showLoading();
        const url = searchValue ? `https://api.themoviedb.org/3/search/movie/?api_key=0f0ca953f6ebd293de6b3243a558b3b1&query=${searchValue}&page=1` :
         `https://api.themoviedb.org/3/movie/${filter}?api_key=0f0ca953f6ebd293de6b3243a558b3b1&language=en-US&page=1`;

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
    }, [filter, searchValue]);

    const handleRefresh = () => {
        getMovieRequest();
    }

    const handleTabClick = (event) => {
        setFilter(event.target.id);
    }

    const setListView = () => {
        setView('list');
    }

    const setGridView = () => {
        setView('grid');
    }

    return (
        <>
            <div className='p-5'>
                <div className='d-flex justify-content-end'>
                    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>

                <div id="btnContainer">
                    <button className={view === 'list' ? 'btn active' : 'btn'} onClick={setListView}><i className="fa fa-bars"></i>list</button> 
                    <button className={view === 'grid' ? 'btn active' : 'btn'} onClick={setGridView}><i className="fa fa-th-large"></i>grid</button>
                </div>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={filter === 'now_playing' ? 'nav-link active' : 'nav-link'} onClick={handleTabClick} id="now_playing" type="button">
                            Now Playing
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={filter === 'top_rated' ? 'nav-link active' : 'nav-link'} onClick={handleTabClick} id="top_rated" type="button">
                            Top Rated
                        </button>
                    </li>
                </ul>
            </div>

            <PullToRefresh onRefresh={getMovieRequest}>
                <MovieList loading={loading} movies={movies} error={error} view={view}/>
            </PullToRefresh>
        </>
    );
};

export default Movies;