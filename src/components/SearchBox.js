import React from 'react';

const SearchBox = (props) => {
	
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input
					className='form-control'
					value={props.value}
					onChange={(event) => props.setSearchValue(event.target.value)}
					placeholder='Search...'
				></input>
			</form>
			
		</div>
	);
};

export default SearchBox;