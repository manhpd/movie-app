import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = (props) => {
    const {movie} = props;
    const navigate = useNavigate();
    
    function handleClick() {
        navigate(`/movies/${movie.id}` );
    }

	return (
        <div onClick={handleClick} id={movie.id} key={'movie_'+movie.id} className={props.view === 'list' ? 'movie-list-item border rounded m-3'  : 'movie-grid-item border rounded m-3'}>
            <img className={props.view === 'list' ? 'thumbnail' : ''}src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+ movie.poster_path} alt='movie'></img>
            <span className='px-3 py-2'><strong>{movie.original_title}</strong></span>
            <span className='px-3 pb-2'>{movie.release_date}</span>
        </div>
	);
};

export default MovieCard;