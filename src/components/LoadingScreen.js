import React from 'react';

const LoadingScreen = (props) => {
	return (
			<div className='loading-screen p-5 d-flex flex-column justify-content-center align-items-center m-5' >
				<div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
                <strong className='text-primary'>Loading...</strong>
			</div>
	);
};

export default LoadingScreen;