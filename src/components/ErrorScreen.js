import React from 'react';

const ErrorScreen = (props) => {
	return (
			<div className='loading-screen p-5 d-flex flex-column justify-content-center align-items-center m-5' >
                <div className="alert alert-danger">
                    <strong>Error!</strong> Something went wrong ...
                    <p>{props.errorMessage}</p>
                </div>
			</div>
	);
};

export default ErrorScreen;